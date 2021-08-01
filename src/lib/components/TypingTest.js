import React from 'react';

import './TypingTest.css'
import wordList from './words.json'

class TypingTest extends React.Component {
    constructor(props) {
        super(props);

        this.updateWord = this.updateWord.bind(this);
        this.moveToNextWord = this.moveToNextWord.bind(this);
        this.end = this.end.bind(this);
        this.reset = this.reset.bind(this);
        this.calculateWPM = this.calculateWPM.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = { 
            wordsToType: this.getRandomWordList(),
            currentWord: "",
            currentWordIndex: 0,
            correctChars: 0,
            hasStarted: false,
            wpm: 0,
            startTime: 0,
        };
    }

    componentDidMount() {
        document.querySelector("#react-typing-test-input").focus();
    }

    getRandomWordList() {
        let wordCount = wordList[this.props.language].length;

        let i = 0;

        let randomWords = [];

        while (i < this.props.wordLimit) {
            let random = Math.random();
            let word = wordList[this.props.language][Math.floor(random * wordCount)]

            randomWords.push({ 
                word: word, 
                class: i === 0 ? "highlight" : ""
            });

            i += 1;
        }

        return randomWords;
    }

    async updateWord(event) {
        let value = event.target.value

        if (!this.state.hasStarted) {
            this.setState({
                startTime: Date.now(),
                hasStarted: true,
            });
        }

        if (value[value.length - 1] === " ") {
            await this.moveToNextWord();
            this.state.wordsToType[this.state.currentWordIndex].class = "spaceWord highlight";
        } else {
            await this.setState({currentWord: value});
            await this.handleKeyPress();
        }

    }

    async moveToNextWord() {
        if (this.state.currentWordIndex === this.props.wordLimit - 1) {
            await this.end();
        } else {
            await this.setState({
                currentWordIndex: this.state.currentWordIndex + 1,
                currentWord: "",
            });
        }
    }

    async handleKeyPress() {
        let currentWord = this.state.currentWord;
        let wordToType = this.state.wordsToType[this.state.currentWordIndex].word;
        let charIndex = currentWord.length;

        let wordsToType = this.state.wordsToType;

        let wordsAreEqual = currentWord.slice(0, charIndex) === wordToType.slice(0, charIndex);

        if (wordsAreEqual) {
            wordsToType[this.state.currentWordIndex].class = "spacedWord correct"
            this.setState({
                correctChars: this.state.correctChars + 1
            });
        } else {
            wordsToType[this.state.currentWordIndex].class = "spacedWord incorrect"
            this.setState({
                correctChars: this.state.correctChars - 1
            });
        }

        this.setState({
            wordsToType: wordsToType
        });
    }

    async end() {
        await this.calculateWPM();
    }

    async calculateWPM() {
        let elapsedMinutes = ((Date.now() - this.state.startTime) / 1000) / 60;

        let wpm = Math.floor((this.state.correctChars / 5) / elapsedMinutes);

        await this.setState({wpm: wpm});
    }

    async reset() {
        await this.setState({
            wordsToType: this.getRandomWordList(),
            currentWord: "",
            currentWordIndex: 0,
            correctChars: 0,
            hasStarted: false,
            wpm: 0,
            startTime: 0,
        });

        document.querySelector("#react-typing-test-input").focus();
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
                            id="react-typing-test-input"
                            value={this.state.currentWord}
                            onChange={this.updateWord}
                            autoComplete="off" className="textInput"/>
                        <button className="reactTypingTestButton" onClick={this.reset}>Redo</button>
                    </div>
                    <div>{this.state.wpm} w.p.m.</div>
                </section>
            </div>
        )
    }
}

TypingTest.defaultProps = {
    wordLimit: 50,
    language: 'english',
}

export default TypingTest; 