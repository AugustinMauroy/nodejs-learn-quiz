import { useState } from 'react';
import style from './index.module.css';

export default function Quiz({ children }) {
    const correctAnswer: string = children.correctAnswer;
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            if (correctAnswer === answer){
                setCorrect(true);
                setIncorrect(false);
                document.getElementById(index.toString()).style.backgroundColor = "var(--brand6)";
            } else {
                setCorrect(false);
                setIncorrect(true);
                document.getElementById(index.toString()).style.backgroundColor = "var(--danger6)";
            }
        }
    };

    const Answers = () => {
        return(
            children.answers.map((answer, index) => {
                return(
                    <button
                    key={index} 
                    onClick={checkAnswer(correctAnswer, answer, index)}
                    id={index}
                    >
                        {answer}
                    </button>
                )
            })
        );
    };

    const Content = () => {
        if (children.type === "multiple"){return(
            <>
                <h4>{children.question}</h4>
                <ul className={style.answers}>
                    <Answers />
                </ul>
            </>
        )} else if (children.type === "boolean"){return(
            <>
                <h4>{children.question}</h4>
                {/* Create an system to mix the answers */}
            </>
        )}
        throw new Error("No type specified");
    };

    return (
        <div className={style.quiz}>
         <Content />
        </div>
    );
};
