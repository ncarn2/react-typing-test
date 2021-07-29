"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./TypingTest.css");

var _words = _interopRequireDefault(require("./words.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TypingTest extends _react.default.Component {
  constructor(props) {
    super(props);
    this.redo = this.redo.bind(this);
    this.updateWord = this.updateWord.bind(this);
    this.state = {
      wordsToType: this.getRandomWordList(),
      currentWord: "",
      currentWordIndex: 0,
      correctWords: 0,
      hasStarted: false,
      wpm: 0,
      startTime: 0
    };
  }

  calculateWPM() {
    // TODO: track characters not words and use that / 5 to get WPM
    let elapsedTime = Math.floor((Date.now() - this.state.startTime) / 1000);
    console.log("elapsed time: ", elapsedTime);
    let wpm = Math.floor(this.state.correctWords / elapsedTime * 60);
    this.setState({
      wpm: wpm
    });
  }

  updateWord(event) {
    if (!this.state.hasStarted) {
      this.setState({
        hasStarted: true
      });
      this.setState({
        startTime: Date.now()
      });
    }

    let value = event.target.value;

    if (value[value.length - 1] === " ") {
      let isCorrect = false;

      if (this.state.currentWord == this.state.wordsToType[this.state.currentWordIndex].word) {
        isCorrect = true;
        this.setState({
          correctWords: this.state.correctWords + 1
        });
      }

      this.state.wordsToType[this.state.currentWordIndex].class += isCorrect ? " correct" : " incorrect";
      this.setState({
        currentWord: ""
      });

      if (this.state.currentWordIndex + 1 == this.props.wordLimit) {
        this.calculateWPM();
      } else {
        this.state.wordsToType[this.state.currentWordIndex + 1].class += " highlight";
        this.setState({
          currentWordIndex: this.state.currentWordIndex + 1
        });
      }
    } else {
      this.setState({
        currentWord: event.target.value
      });
    }
  }

  redo() {
    this.setState({
      wordsToType: this.getRandomWordList(),
      currentWordIndex: 0,
      currentWord: ""
    });
    document.querySelector("input").focus();
  }

  getRandomWordList() {
    let wordCount = _words.default[this.props.language].length;
    let i = 0;
    let randomWords = [];

    while (i < this.props.wordLimit) {
      let word = _words.default[this.props.language][Math.floor(Math.random() * wordCount + 1)];

      randomWords.push({
        word: word,
        class: i == 0 ? "highlight" : ""
      });
      i += 1;
    }

    return randomWords;
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "mainContainer"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "topBar"
    }), /*#__PURE__*/_react.default.createElement("section", {
      className: "typingArea"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wordArea"
    }, this.state.wordsToType.map(randWord => {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: "spacedWord ".concat(randWord.class)
      }, randWord.word);
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "bottomBar"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      spellCheck: "false",
      value: this.state.currentWord,
      onChange: this.updateWord,
      autoComplete: "off",
      className: "textInput"
    }), /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.redo
    }, "Redo")), /*#__PURE__*/_react.default.createElement("div", null, this.state.wpm, " w.p.m.")));
  }

}

TypingTest.defaultProps = {
  wordLimit: 30,
  language: 'english'
};
var _default = TypingTest;
exports.default = _default;