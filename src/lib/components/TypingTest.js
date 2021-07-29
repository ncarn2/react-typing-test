import React from 'react';
import { useState } from 'react';

import './TypingTest.css'
import wordList from './words.json'

class TypingTest extends React.Component {
    constructor(props) {
        super(props);

        this.redo = this.redo.bind(this);
        this.updateWord = this.updateWord.bind(this);

        this.state = { 
            wordsToType: this.getRandomWordList(),
            currentWord: "",
            currentWordIndex: 0,
        };
    }

    calculateWPM() {
        console.log("calculating wpm");
    }

    updateWord(event) {
        let value = event.target.value;


        if (value[value.length - 1] === " ") {

            let isCorrect = false;

            if (this.state.currentWord == this.state.wordsToType[this.state.currentWordIndex].word) {
                isCorrect = true;
            }

            this.state.wordsToType[this.state.currentWordIndex].class += isCorrect ? " correct" : " incorrect";

            this.setState({currentWord: ""});

            if (this.state.currentWordIndex + 1 == this.props.wordLimit) {
                this.calculateWPM();
            } else {
                this.state.wordsToType[this.state.currentWordIndex + 1].class += " highlight";

                this.setState({currentWordIndex: this.state.currentWordIndex + 1});
            }
        } else {
            this.setState({currentWord: event.target.value});
        }
    }

    redo() {
        this.setState({
         wordsToType: this.getRandomWordList(),
         currentWordIndex: 0,
         currentWord: "",
        });

        document.querySelector("input").focus();
    }

    getRandomWordList() {
        let wordCount = wordList[this.props.language].length;

        let i = 0;

        let randomWords = [];

        while (i < this.props.wordLimit) {
            let word = wordList[this.props.language][Math.floor(Math.random() * wordCount + 1)]

            randomWords.push({ 
                word: word, 
                class: i == 0 ? "highlight" : ""
            });

            i += 1;
        }

        return randomWords;
    }

    render() {
        return (
            <div className="mainContainer">

                <div className="topBar"></div>

                <section className="typingArea">
                    <div className="wordArea">
                        {this.state.wordsToType.map(randWord => {
                            return (
                                <span className={`spacedWord ${randWord.class}`}>{randWord.word}</span>
                            )
                        })}
                    </div>
                    <div className="bottomBar">
                        <input type="text" spellCheck="false" 
                            value={this.state.currentWord}
                            onChange={this.updateWord}
                            autoComplete="off" className="textInput"/>
                        <button onClick={this.redo}>Redo</button>
                    </div>
                    <div>Word:{this.state.currentWord}</div>
                </section>
            </div>
        )
    }
}

TypingTest.defaultProps = {
    wordLimit: 3,
    language: 'english',
}

export default TypingTest; 