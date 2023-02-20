import { useState } from 'react';
import Styles from './index.module.css';

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

    const correctAnswer: string | boolean = children.correctAnswer;
    const correctAnswerIndex: number = children.answers? children.answers.indexOf(correctAnswer) : -1; 

    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(-1);
    const [summitInfo, setSummitInfo] = useState<string>('');
    const [isSummit, setIsSummit] = useState<boolean>(false);

    const selectAnswer = (answer: string, index: number):any => {
        return () => {
            if (isSummit) return;
            if (answer === selectedAnswer){
                setSelectedAnswer('');
                setSelectedAnswerIndex(-1);
                return;
            };
            setSelectedAnswer(answer);
            setSelectedAnswerIndex(index);
        };
    };

    const checkAnswer = (answer: string):any => {
        return () => {
            if (isSummit) return;
            if (answer === ''){
                setSummitInfo('Please select an answer');
                setTimeout(() => {
                    setSummitInfo('');
                }, 2000);
                return;
            };

            setIsSummit(true);

            if (correctAnswer === answer){
                setSummitInfo('Correct Answer');
            } else {
                setSummitInfo('Wrong Answer');
            };
        };
    };

    const AnswersTypeMultiple = (): JSX.Element => {
        return(
            children.answers.map((answer:string, index:number) => {
                return(
                    <>
                    <span
                    className={Styles.select}
                    onClick={selectAnswer(answer, index)}
                    >
                        <span
                        className={Styles.check}
                        style={{ backgroundColor: selectedAnswerIndex === index ? 'var(--black8)' : '' }}
                        >
                            {
                                isSummit && correctAnswerIndex === index ? <img src="/true.svg" alt="" className={Styles.true} /> : ''
                            }{
                                isSummit && correctAnswerIndex !== index && selectedAnswerIndex === index ? <img src="/false.svg" alt="" className={Styles.false} /> : ''
                            }
                        </span>
                        <p key={index.toString()} >
                            {answer}
                        </p>
                    </span>
                    </>
                );
            })
        );
    };

    const AnswersTypeBool = (): JSX.Element => {
        return(
            <>
            <span
            className={Styles.select}
            onClick={selectAnswer('True', 0)}
            >
                <span
                className={Styles.check}
                style={{ backgroundColor: selectedAnswerIndex === 0 ? 'var(--black8)' : '' }}
                >
                    {
                        isSummit && correctAnswer === true ? <img src="/true.svg" alt="" className={Styles.true} /> : ''
                    }{
                        isSummit && correctAnswer !== true && selectedAnswerIndex === 0 ? <img src="/false.svg" alt="" className={Styles.false} /> : ''
                    }
                </span>
                <p>
                    True
                </p>
            </span>
            <span
            className={Styles.select}
            onClick={selectAnswer('False', 1)}
            >
                <span
                className={Styles.check}
                style={{ backgroundColor: selectedAnswerIndex === 1 ? 'var(--black8)' : '' }}
                >
                    {
                        isSummit && correctAnswer === false ? <img src="/true.svg" alt="" className={Styles.true} /> : ''
                    }{
                        isSummit && correctAnswer !== false && selectedAnswerIndex === 1 ? <img src="/false.svg" alt="" className={Styles.false} /> : ''
                    }
                </span>
                <p>
                    False
                </p>
            </span>
            </>
        );
    };

    return (
        <div className={Styles.quiz}>    
            <h2>{children.question}</h2>
            <div className={Styles.answers}>
                {children.type === 'multiple' ? <AnswersTypeMultiple /> : <AnswersTypeBool />}
            </div>
            <div className={Styles.summit}>
                <button 
                className={Styles.button}
                onClick={checkAnswer(selectedAnswer)}
                >
                    Summit
                </button>
                <p>
                    {summitInfo}
                </p>
            </div>
        </div>
    );
};
