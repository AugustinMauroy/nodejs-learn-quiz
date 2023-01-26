import  Quiz  from '../components/quiz/';

export default function Index() {
    return (
        <>
            <h1>Learn</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi labore excepturi dolorum velit eveniet temporibus. Quae ipsa nisi voluptatibus in, soluta laboriosam sint ipsam cumque, omnis vel dolores repellendus.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ullam? Minus harum sapiente facilis nulla officia dolorum, alias dolores cupiditate ipsa porro quis qui sit. Eaque ipsum nulla enim beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eligendi debitis voluptatibus ipsam consectetur perferendis molestiae, a accusantium cumque distinctio expedita sit, voluptatem sunt ea nostrum enim mollitia omnis excepturi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum facere, quo accusamus mollitia iusto placeat repellat ad tempore consectetur. Magni nostrum, recusandae natus quod fugiat doloribus. Cumque alias incidunt aliquid!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem obcaecati quasi quis quia, voluptas saepe minus alias suscipit iure non quidem illo blanditiis eos fugit. Aut eum ut quasi suscipit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, distinctio, nemo quidem tempora ad, quis molestiae magni dignissimos eum at eaque deleniti. Magnam et veritatis ipsam quod. Vero, voluptatibus! Doloribus.
            </p>
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
        </>
    );
};
