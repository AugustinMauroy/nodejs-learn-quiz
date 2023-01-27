import  Quiz  from '../components/quiz/';

export default function Index() {
    return (
        <>
            <Quiz>
                {{
                    type: "multiple",
                    question : "What is nodejs.js",
                    answers : [
                        "A server side javascript runtime",
                        "A javascript framework",
                        "A tools for building javascript applications",
                    ],
                    correctAnswer: "A server side javascript runtime"
                }}
            </Quiz>
            <Quiz>
                {{
                    type: "boolean",
                    question : "Is nodejs.js a server side javascript runtime",
                    correctAnswer: true
                }}
            </Quiz>
        </>
    );
};
