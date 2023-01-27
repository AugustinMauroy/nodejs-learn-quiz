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
    }



    const correctAnswer: string = children.correctAnswer;
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            if (correctAnswer === answer){
                setCorrect(true);
                setIncorrect(false);
                document.getElementById(index.toString()).style.backgroundColor = "var(--brand5)";
            } else {
                setCorrect(false);
                setIncorrect(true);
                document.getElementById(index.toString()).style.backgroundColor = "var(--danger5)";
            }
        }
    };

    const Answers = () => {
        return(
            children.answers.map((answer:string, index) => {
                return(
                    <span
                    key={index} 
                    onClick={checkAnswer(correctAnswer, answer, index)}
                    id={index}
                    >
                        {answer}
                    </span>
                )
            })
        );
    };

    const Content = () => {
        if (children.type === "multiple"){return(
            <>
                <h2>{children.question}</h2>
                <div className={style.answers}>
                    <Answers />
                </div>
            </>
        )} else if (children.type === "boolean"){return(
            <>
                <h4>{children.question}</h4>
                {/* @todo: add system to create true or false */}
            </>
        )}
    };

    return (
        <div className={style.quiz}>
         <Content />
        </div>
    );
};
