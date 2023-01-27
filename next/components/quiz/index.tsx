import { useState } from 'react';
import style from './index.module.css';

export default function Quiz({ children}: any) {
    // Test if the children format is correct and throw an error if not
    if (children.type !== "multiple" && children.type !== "boolean"){
        throw new Error("No type specified");
    } else if (children.type === "multiple" && !children.answers){
        throw new Error("No answers specified");
    } else if (children.type === "multiple" && !children.correctAnswer){
        throw new Error("No correct answer specified");
    } else if (children.type === "boolean" && !children.correctAnswer){
        throw new Error("No correct answer specified");
    } else if (!children.question){
        throw new Error("No question specified");
    } else if (children.type === "multiple" && children.answers.length < 2){
        throw new Error("Not enough answers specified");
    } else if (children.type === "boolean" && children.correctAnswer !== true && children.correctAnswer !== false){
        throw new Error("Correct answer is not true or false");
    } else if (children.type === "multiple" && children.answers.includes(children.correctAnswer) === false){
        throw new Error("Correct answer is not in the answers array");
    };

    const correctAnswer: string = children.correctAnswer;

    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);

    const selectAnswer = (answer: string, index: number) => {
        return () => {
            setSelectedAnswer(answer);
            setSelectedAnswerIndex(index);
            document.getElementById(`check${index}`).style.backgroundColor = "var(--black5)";
        };
    };

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            setSelectedAnswer(answer);
            setSelectedAnswerIndex(index);
            if (correctAnswer === answer){
                document.getElementById(`check${index}`).innerHTML = '<img src="/true.svg" alt="true" />';
                document.getElementById(`check${index}`).style.backgroundColor = "var(--brand5)";
                const content = document.getElementById('summit').innerHTML
                document.getElementById('summit').innerHTML = content + `<p>Correct!</p>`

            } else {
                document.getElementById(`check${index}`).innerHTML = '<img src="/false.svg" alt="false" />';
                document.getElementById(`check${index}`).style.backgroundColor = "var(--danger5)";
            };
        }
    };

    const AnswersTypeMultiple = () => {
        return(
            children.answers.map((answer:string, index:number) => {
                return(
                    <>
                    <span
                    className={style.select}
                    onClick={selectAnswer(answer, index)}
                    >
                        <span id={`check${index}`} className={style.check}/>
                        <p
                        key={index.toString()} 
                        id={`${index}`}
                        >
                            {answer}
                        </p>
                    </span>
                    </>
                )
            })
        );
    };

    const AnswersTypeBool = () => {
        return(
            <>
                {/* TODO: add system to support quiz type bool */}
            </>
        );
    };

    const Content = () => {
        if (children.type === "multiple") return <AnswersTypeMultiple />
        if (children.type === "boolean") return<AnswersTypeBool />
    };

    return (
        <div className={style.quiz} id='quiz'>    
            <h2>{children.question}</h2>
            <div className={style.answers}>
                <Content />
            </div>
            <div id='summit' className={style.summit}>
            <button 
            onClick={checkAnswer(correctAnswer, selectedAnswer, selectedAnswerIndex)}
            className={style.button}
            >
                Summit
            </button>
            </div>
        </div>
    );
};
