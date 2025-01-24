import {useEffect, useState} from "react";

export const Questionary = ({questions, hanldeQuestionary}) => {



    const [selected, setSelected] = useState({})
    const [message, setMessage] = useState('Enviar Respuestas')
    const [points, setPoints] = useState({})

    const handleSelected = (name, value) => {
        setSelected({
            ...selected,
            [name]: value
        })
    }

    useEffect(() => {
        setMessage('Enviar Respuestas')
    }, [selected]);

    const handlePoints = (name, value) => {
        setPoints({
            ...points,
            [name]: value
        })
    }

    const sendAnswers = () => {
        console.log("SI")
        if(Object.keys(selected).length === questions.length){
            let allPoints = 0;
            let totalQuestions = questions.length;
            for (let i = 0; i < Object.keys(points).length; i++) {
                // @ts-ignore
                if (points["question-" + i] === "correct"){
                    allPoints++;
                }
            }

            let valuePoints = 5 / totalQuestions
            let finalResult = valuePoints * allPoints;
            
            hanldeQuestionary(finalResult)
            setMessage('Respuestas Enviadas')
        }
        else {
            console.log("no")
        }
    }

    // @ts-ignore
    return (
        <>
            <div className="min-h-96 p-5 gap-2 mb-20 px-48">
                <h2 className="text-center font-bold text-4xl">¡Pongamos en práctica lo aprendido!</h2>
                <div className="border-2 my-8 border-[#545E75]" />
                <div className="flex flex-col items-center gap-y-8">
                    {
                        questions.map((question, questionIndex) => (
                            <div className="w-full" key={"question-" + questionIndex}>
                                <div className="text-2xl my-5 font-semibold">
                                    <h3 className="text-center">{question.title}</h3>
                                </div>
                                <div className="grid grid-cols-3 gap-20">
                                    {
                                        question.answer.sort().map((answers, index) => (
                                            <div
                                                key={"answer-" + index}
                                                className={` cursor-pointer h-40x rounded-xl flex justify-center items-center font-bold p-10 text-center hover:border-green-500 ${selected["question-" + questionIndex] === 'answer-' + index ? 'border-4 border-green-500 bg-lime-100': 'border-2 border-[#545E75]'}`}
                                                onClick={ () => {
                                                    handleSelected("question-" + questionIndex, "answer-" + index )
                                                    handlePoints("question-" + questionIndex, answers.type )
                                                } }
                                            >
                                                {answers.title}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="border my-8 border-[#545E75]" />
                            </div>
                        ))
                    }
                    <button
                        onClick={ sendAnswers }
                        disabled={ Object.keys(selected).length !== questions.length || message === 'Respuestas Enviadas'}
                        className={`border-2 w-80 rounded-xl p-4 font-bold ${ message === 'Enviar Respuestas' ? 'border-[#545E75]' : 'border-green-500 text-green-500' }`}>{ Object.keys(selected).length === questions.length ? message : 'Llevas ' +  Object.keys(selected).length + " de " + questions.length }</button>
                </div>
            </div>
        </>
    );

}
