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
            document.getElementById(`${index}`).style = "border: 2px solid var(--brand5);"
        };
    };

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            setSelectedAnswer(answer);
            setSelectedAnswerIndex(index);
            if (correctAnswer === answer){
                document.getElementById(`check${index}`).src = '/true.svg';
                document.getElementById(`check${index}`).style.backgroundColor = "var(--brand5)";
            } else {
                document.getElementById(`check${index}`).src = '/false.svg';
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
                        <img id={`check${index}`}/>
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
                <span
                className={style.select}
                onClick={checkAnswer(correctAnswer, "true", 0)}
                >
                    <image id={`check0`}/>
                    <p
                    id={`0`}
                    >
                        True
                    </p>
                </span>
                <span
                className={style.select}
                onClick={checkAnswer(correctAnswer, "false", 1)}
                >
                    <image id={`check1`}/>
                    <p
                    id={`1`}
                    >
                        False
                    </p>
                </span>
            </>
        );
    };

    const Content = () => {
        if (children.type === "multiple") return <AnswersTypeMultiple />
        if (children.type === "boolean") return<AnswersTypeBool />
    };

    return (
        <div className={style.quiz}>    
            <h2>{children.question}</h2>
            <div className={style.answers}>
                <Content />
            </div>
            <button 
            onClick={checkAnswer(correctAnswer, selectedAnswer, selectedAnswerIndex)}
            className={style.button}
            >
                Summit
            </button>
        </div>
    );
};
