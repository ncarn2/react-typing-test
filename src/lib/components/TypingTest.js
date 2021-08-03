import React from 'react';
import { getRandomWordList } from '../util/wordListGenerator';

import { MainContainer, Input, RedoButton, BottomBar, Word } from './style';

class TypingTest extends React.Component {
    constructor(props) {
        super(props);

        this.updateWord = this.updateWord.bind(this);
        this.moveToNextWord = this.moveToNextWord.bind(this);
        this.end = this.end.bind(this);
        this.reset = this.reset.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = { 
            wordsToType: getRandomWordList(this.props.language, this.props.wordLimit),
            currentWord: "",
            currentWordIndex: 0,
            correctChars: 0,
            hasStarted: false,
            wpm: 0,
            accuracy: 0,
            startTime: 0,
        };
    }

    componentDidMount() {
        document.querySelector("#react-typing-test-input").focus();
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
            await this.setState({
                correctChars: this.state.correctChars + 1, 
            });
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
            document.querySelector("#react-typing-test-input").classList.remove("incorrect");

            wordsToType[this.state.currentWordIndex].class = "spacedWord correct"
            this.setState({
                correctChars: this.state.correctChars + 1
            });
        } else {
            document.querySelector("#react-typing-test-input").classList.add("incorrect");

            wordsToType[this.state.currentWordIndex].class = "spacedWord incorrect"
        }

        this.setState({
            wordsToType: wordsToType
        });
    }

    async end() {
        this.setState({
            hasStarted: false,
        });

        let elapsedMinutes = ((Date.now() - this.state.startTime) / 1000) / 60;

        let wpm = Math.floor((this.state.correctChars / 5) / elapsedMinutes);

        let charsToType = 0;
        this.state.wordsToType.forEach(word => {
            charsToType += word.word.length + 1;
        });

        let accuracy = Math.round(100 * (this.state.correctChars / charsToType));

        await this.setState({
            wpm: wpm,
            accuracy: accuracy,
        });
    }

    async reset() {
        document.querySelector("#react-typing-test-input").classList.remove("incorrect");

        await this.setState({
            wordsToType: getRandomWordList(this.props.language, this.props.wordLimit),
            currentWord: "",
            currentWordIndex: 0,
            correctChars: 0,
            hasStarted: false,
            wpm: 0,
            accuracy: 0,
            startTime: 0,
        });

        document.querySelector("#react-typing-test-input").focus();
    }

    render() {
        return (
            <MainContainer>

                <div>
                    {this.state.wordsToType.map(randWord => {
                        return (
                            <Word className={`spacedWord ${randWord.class}`}>{randWord.word}</Word>
                        )
                    })}
                </div>

                <BottomBar>
                    <Input type="text" spellCheck="false" 
                        id="react-typing-test-input"
                        value={this.state.currentWord}
                        onChange={this.updateWord}
                        autoComplete="off" 
                        />
                    <RedoButton id="react-typing-test-button" onClick={this.reset}>Redo</RedoButton>
                </BottomBar>

                <span>WPM: {this.state.wpm} </span>
                <span>ACC: {this.state.accuracy}%</span>
            </MainContainer>
        )
    }
}

TypingTest.defaultProps = {
    wordLimit: 50,
    language: 'english',
}

export default TypingTest; 