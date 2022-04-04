import { BrowserWindow } from "electron/main";
import * as remote from '@electron/remote';
import fs from "fs";
import React from "react";

function MainMenu() {

	const loadQuiz = () => {
		//const dialog = remote.dialog;
	}

    return (
        <div className="h-screen w-screen p-10 text-center bg-red-500">
            <h1 className="text-6xl text-bold text-white">📸 ClashCard ⚡️</h1>
            <div className="grid grid-cols-1 m-5 align-middle">
				<button onClick={() => loadQuiz()} className="p-2 m-2 bg-white hover:bg-gray-200 rounded-lg text-2xl">🧠 Start Quiz</button>
				<button className="p-2 m-2 bg-white hover:bg-gray-200 rounded-lg text-2xl">✍🏻 Create New Quiz</button>
            </div>
        </div>
    )
}

export default MainMenu;