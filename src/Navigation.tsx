import React from "react";

interface NavigationProps {
    currentQuestion: number;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

function Navigation({ currentQuestion, setCurrentQuestion }: NavigationProps) {

    const clickFunction = (correct: boolean) => {
        if(correct) {

        } else {

        }

        setCurrentQuestion(currentQuestion + 1);
    }

    return(
        <div className="bg-transparent grid grid-cols-2">
            <button onClick={() => clickFunction(false)} className="p-6 m-2 bg-red-400 rounded-xl text-xl hover:bg-red-300"> ❌ </button>
            <button onClick={() => clickFunction(true)} className="p-6 m-2 bg-green-500 rounded-xl text-xl hover:bg-green-400"> ✅ </button>   
        </div>
    )
}

export default Navigation;