import React, { useState, useEffect } from "react"
import Card from "./Card"
import Navigation from "./Navigation";

import Questions from "./questions/questions.json"

export default function App() {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const currentCard = () => {

        if(currentQuestion === (Questions.length))
            setCurrentQuestion(0);

        if(typeof Questions[currentQuestion].hasOwnProperty("formula"))
            return (<Card question={Questions[currentQuestion].question} answer={Questions[currentQuestion].answer} formula={Questions[currentQuestion].formula} />)
        else
            return (<Card question={Questions[currentQuestion].question} answer={Questions[currentQuestion].answer} />)
    }

    return(
        <div className="h-screen w-screen bg-gray-600 justify-center items-center grid grid-cols-1 text-gray-700">
            { currentCard() }
            <Navigation currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        </div>
    )


}

/*
    const [totalQuestions, setTotalQuestions] = useState(0);

    useEffect(() => {
        setTotalQuestions(Questions.length);
    }, []);
*/