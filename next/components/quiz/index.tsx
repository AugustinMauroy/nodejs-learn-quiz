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
    } else if (children.type === "boolean" && children.correctAnswer !== "true" && children.correctAnswer !== "false"){
        throw new Error("Correct answer is not true or false");
    } else if (children.type === "multiple" && children.answers.includes(children.correctAnswer) === false){
        throw new Error("Correct answer is not in the answers array");
    };

    const correctAnswer: string = children.correctAnswer;
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            if (correctAnswer === answer){
                setCorrect(true);
                setIncorrect(false);
                document.getElementById(index.toString()).style.backgroundColor = "var(--brand5)";
                document.getElementById(`check${index}`).innerHTML = "/true.svg";
            } else {
                setCorrect(false);
                setIncorrect(true);
                document.getElementById(index.toString()).style.backgroundColor = "var(--danger5)";
                document.getElementById(`check${index}`).innerHTML = "/false.svg";
            }
        }
    };

    const AnswersTypeMultiple = () => {
        return(
            children.answers.map((answer:string, index) => {
                return(
                    <>
                    <span>
                        <image id={`check${index}`}/>
                        <p
                        key={index} 
                        onClick={checkAnswer(correctAnswer, answer, index)}
                        id={index}
                        >
                            {answer}
                        </p>
                    </span>
                    </>
                )
            })
        );
    };

    const Content = () => {
        if (children.type === "multiple"){return(
            <>
                <h2>{children.question}</h2>
                <div className={style.answers}>
                    <AnswersTypeMultiple />
                </div>
            </>
        )} else if (children.type === "boolean"){return(
            <>
                <h4>{children.question}</h4>
                <div className={style.answers}>
                    <span onClick={checkAnswer("true", "true", 0)} id="0">True</span>
                    <span onClick={checkAnswer("false", "false", 1)} id="1">False</span>
                </div>
            </>
        )}
    };

    return (
        <div className={style.quiz}>
         <Content />
        </div>
    );
};
