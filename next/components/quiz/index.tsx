import React from 'react';

export default function Quiz({ children }) {
    const correctAnswer: string = children.correctAnswer;

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
                <ul>
                    <li>{children.correct_answer}</li>
                    <li>{children.incorrect_answer}</li>
                </ul>
            </div>
        )}
        return (
        <div>Error in inserted data.</div>
        );
    };

    return (
        <Content />
    );
};

function checkAnswer(correctAnswer: string, answer: string, index: number){
    if (correctAnswer === answer){
        // add green background to button using react

    } else {
        // add red background to button using react

    };
    return null;
};
