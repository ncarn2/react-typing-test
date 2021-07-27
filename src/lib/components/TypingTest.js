import React from 'react';
import { useEffect } from 'react';
import './TypingTest.css'
import wordList from './words.json'

const Button = (props) => {
    useEffect(() => {
        console.log("Once");
    }, []);
    
    const words = wordList.english.map(word => {
        console.log("Word: ", word)
        return (
            <span className="spacedWord">{word}</span>
        );
    }); 

    // TODO: get text list
    // TODO: get user input clear on space :)
    //TODO: get the text file
    //TODO: check props for language
    //TODO:

    return (
        <div className="mainContainer">
            <div className="typingArea">
                <div>
                    {words}
                </div>
                <div>
                    <input type="text" spellCheck="false" 
                           autoComplete="off" className="textInput"/>
                    <button>Redo</button>
                </div>
            </div>
        </div>
    )
}

export default Button;