import React, { useState } from "react"
import MainMenu from "./MainMenu"
import Quiz from "./Quiz"
import { Pages } from "./types"


export default function App() {

    const [currentPage, setCurrentPage] = useState(Pages.MainMenu);

    if (currentPage === Pages.MainMenu) {
        return ( <MainMenu setCurrentPage={setCurrentPage} /> )
    } else if (currentPage === Pages.Quiz) {
        return ( <Quiz /> )
    }

}