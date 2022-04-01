import React from "react";
import './flipcard.css'

import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

interface CardProps {
    question: string;
    answer: string;
    formula?: string;
}

function Card({ question, answer, formula }: CardProps) {

    const mathFormula = () => {
        if(formula !== null)
            return (<TeX math={formula} />)
    }

    return(
        <section className="h-screen w-screen bg-gray-600 flex justify-center items-center gap-x-16 text-gray-700">
            <div id="flip-card" >
                <div id="flip-card-inner">
                    <div id="flip-card-front" className="bg-gray-100 rounded-3xl flex justify-center items-center">
                        <div className="m-4 p-4 align-middle text-center">
                            <h3 className="text-3xl text-bold text-red-500"> { question } </h3>
                        </div>
                    </div>
                    <div id="flip-card-back" className="bg-gray-100 rounded-3xl">
                        <div className="m-4 p-4 align-middle">
                            <h1 className="text-3xl text-bold"> { question } </h1> 
                            <p className="py-2"> { answer } </p>
                            <p className="py-2"> {mathFormula()} </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;