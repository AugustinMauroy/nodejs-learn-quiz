import { useState } from 'react';
import style from './index.module.css';

export default function Quiz({ children }: any): JSX.Element {
    // Test if the children format is correct and throw an error if not
    if (children.type !== 'multiple' && children.type !== 'boolean'){
        throw new Error('No type specified');
    } else if (children.type === 'multiple' && !children.answers){
        throw new Error('No answers specified');
    } else if (children.type === 'multiple' && !children.correctAnswer){
        throw new Error('No correct answer specified');
    } else if (!children.question){
        throw new Error('No question specified');
    } else if (children.type === 'multiple' && children.answers.length < 2){
        throw new Error('Not enough answers specified');
    } else if (children.type === 'boolean' && children.correctAnswer !== true && children.correctAnswer !== false){
        throw new Error('Correct answer is not true or false');
    } else if (children.type === 'multiple' && children.answers.includes(children.correctAnswer) === false){
        throw new Error('Correct answer is not in the answers array');
    };

    const correctAnswer: string = children.correctAnswer;
    const correctAnswerIndex: number = children.answers.indexOf(correctAnswer); 

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
    const [summitInfo, setSummitInfo] = useState<boolean>(false);

    const selectAnswer = (answer: string, index: number):any => {
        return () => {
            setSelectedAnswer(answer);
            setSelectedAnswerIndex(index);
            document.getElementById(`check${index}`).style.backgroundColor = 'var(--black8)';
        };
    };

    const checkAnswer = (answer: string, index: number):any => {
        return () => {
            if (answer === ''){
                document.getElementById('summitInfo').innerHTML = '<p>Please select an answer</p>';
                setTimeout(() => {
                    document.getElementById('summitInfo').innerHTML = '';
                }, 2000);
                return;
            };

            setSummitInfo(true);

            if (correctAnswer === answer){
                document.getElementById(`check${correctAnswerIndex}`).innerHTML = '<img src="/true.svg" alt="true" />';
                document.getElementById(`check${correctAnswerIndex}`).style.backgroundColor = 'var(--brand5)';
                document.getElementById('summitInfo').innerHTML = '<p>Correct!</p>';
            } else {
                document.getElementById(`check${index}`).innerHTML = '<img src="/false.svg" alt="false" />';
                document.getElementById(`check${index}`).style.backgroundColor = 'var(--danger5)';
                document.getElementById(`check${correctAnswerIndex}`).innerHTML = '<img src="/true.svg" alt="true" />';
                document.getElementById(`check${correctAnswerIndex}`).style.backgroundColor = 'var(--brand5)';
                document.getElementById('summitInfo').innerHTML = '<p>Wrong Answer</p>';
            };
        };
    };

    const AnswersTypeMultiple = (): JSX.Element => {
        return(
            children.answers.map((answer:string, index:number) => {
                return(
                    <>
                    <span
                    className={style.select}
                    onClick={selectAnswer(answer, index)}
                    >
                        <span className={style.check} id={`check${index}`} />
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

    const AnswersTypeBool = (): JSX.Element => {
        return(
            <>
            <span
            className={style.select}
            onClick={selectAnswer('True', 0)}
            >
                <span className={style.check} id={`check0`} />
                <p
                key={0}
                id={'1'}
                >
                    True
                </p>
            </span>
            <span
            className={style.select}
            onClick={selectAnswer('False', 1)}
            >
                <span className={style.check} id={`check1`} />
                <p
                key={1}
                id={'1'}
                >
                    False
                </p>
            </span>
            </>
        );
    };

    const Content = (): JSX.Element => {
        if (children.type === 'multiple') return <AnswersTypeMultiple />
        if (children.type === 'boolean') return <AnswersTypeBool />
    };

    return (
        <div className={style.quiz} id='quiz'>    
            <h2>{children.question}</h2>
            <div className={style.answers}>
                <Content />
            </div>
            <div className={style.summit}>
            <button 
            className={style.button}
            id='summitButton'
            onClick={checkAnswer(selectedAnswer, selectedAnswerIndex)}
            >
                Summit
            </button>
            <p id='summitInfo'></p>
            </div>
        </div>
    );
};
