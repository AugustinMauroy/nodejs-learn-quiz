import Quiz from '../components/quiz/';

export default function pageIndex(): JSX.Element {
    return (
        <>
            <Quiz>
            {{
                type: 'multiple',
                question : 'What is node.js?',
                answers : [
                    'A server side javascript runtime',
                    'A javascript framework',
                    'A tools for building javascript applications',
                ],
                correctAnswer: 'A server side javascript runtime'
            }}
            </Quiz>
        </>
    );
};
