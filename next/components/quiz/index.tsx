import { useState } from 'react';

export default function Quiz({ children }) {
    const correctAnswer: string = children.correctAnswer;
    const [correct, setCorrect] = useState(false);
    const [incorrect, setIncorrect] = useState(false);

    const checkAnswer = (correctAnswer: string, answer: string, index: number) => {
        return () => {
            if (correctAnswer === answer){
                setCorrect(true);
                setIncorrect(false);
                document.getElementById(index.toString()).style.backgroundColor = "green";
            } else {
                setCorrect(false);
                setIncorrect(true);
                document.getElementById(index.toString()).style.backgroundColor = "red";
            }
        }
    };

    const Questions = () => {
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
            <div>
                <h4>{children.question}</h4>
                <ul>
                    <Questions />
                </ul>
            </div>
        )} else if (children.type === "boolean"){return(
            <div>
                <h4>{children.question}</h4>
                {/* Create an system to mix the answers */}
            </div>
        )}
        throw new Error("No type specified");
    };

    return (
        <Content />
    );
};
