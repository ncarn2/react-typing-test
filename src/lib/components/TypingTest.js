import React from 'react';
import { useState } from 'react';

import './TypingTest.css'
import wordList from './words.json'

class TypingTest extends React.Component {
    constructor(props) {
        super(props);

        this.generateNewList = this.generateNewList.bind(this);
        this.state = { wordsToType: this.getRandomWordList() };
    }

    generateNewList() {
        this.setState({
         wordsToType: this.getRandomWordList()
        });
    }

    getRandomWordList() {
        let wordCount = wordList[this.props.language].length;

        let i = 0;

        let temp = [];

        while (i < this.props.wordLimit) {
            let word = wordList[this.props.language][Math.floor(Math.random() * wordCount + 1)]
            temp.push(word);
            i += 1;
        }

        return temp.map(word => {
            return (
                <span className="spacedWord">{word}</span>
            );
        }); 
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="topBar">
                    {/* probably some other component might want to 
                    start splitting this out */}
                </div>
                <div className="typingArea">
                    <div className="wordArea">
                        {this.state.wordsToType}
                    </div>
                    <div className="bottomBar">
                        <input type="text" spellCheck="false" 
                            autoComplete="off" className="textInput"/>
                        <button onClick={this.generateNewList}>Redo</button>
                    </div>
                </div>
            </div>
        )
    }
}

TypingTest.defaultProps = {
    wordLimit: 30,
    language: 'english',
}

export default TypingTest; 