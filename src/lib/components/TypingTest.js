import React from 'react';

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
            currentCharIndex: 0,
            currentWordIndex: 0,
            correctChars: 0,
            hasStarted: false,
            wpm: 0,
            startTime: 0,
        };
    }

    componentDidMount() {
    }

    calculateWPM() {
        // TODO: track characters not words and use that / 5 to get WPM

        let elapsedTime = Math.floor((Date.now() - this.state.startTime) / 1000);
        console.log("elapsed time: ", elapsedTime);
        let wpm = Math.floor((this.state.correctChars / elapsedTime) * 60);
        this.setState({wpm: wpm});
    }

    updateWord(event) {
        if (!this.state.hasStarted) {
            this.setState({hasStarted: true});
            this.setState({startTime: Date.now()});
        }

        let value = event.target.value;
        this.setState({currentWord: value});

        let charToType = this.state.wordsToType[this.state.currentWordIndex].word[this.state.currentCharIndex] ?? " ";

        console.log("char to type: ", charToType, " char index: ", this.state.currentCharIndex, "word index", this.state.currentWordIndex);

        let isCorrect = false;
        if (value[value.length - 1] == charToType) {
            isCorrect = true;
            this.setState({correctChars: this.state.correctChars + 1});
        }

        this.state.wordsToType[this.state.currentWordIndex].class += isCorrect ? " correct" : " incorrect";

        if (value[value.length - 1] == " ") {
            console.log('new state');

            this.setState({
                currentCharIndex: 0,
                currentWordIndex: this.state.currentWordIndex + 1,
                currentWord: "",
            });
        } else {
            this.setState({currentCharIndex: this.state.currentCharIndex + 1});
        }

        // if (value[value.length - 1] === " ") {

        //     let isCorrect = false;

        //     if (this.state.currentWord == this.state.wordsToType[].word) {
        //         isCorrect = true;
        //     }

        //     this.state.wordsToType[].class += isCorrect ? " correct" : " incorrect";

        //     this.setState({currentWord: ""});

        //     if () {
        //         this.calculateWPM();
        //     } else {
        //         this.state.wordsToType[].class += " highlight";

        //         this.setState({});
        //     }
        // } else {
        //     this.setState({currentWord: event.target.value});
        // }
    }

    redo() {
        this.setState({
         wordsToType: this.getRandomWordList(),
         currentCharIndex: 0,
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
                    <div>{this.state.wpm} w.p.m.</div>
                </section>
            </div>
        )
    }
}

TypingTest.defaultProps = {
    wordLimit: 5,
    language: 'english',
}

export default TypingTest; 