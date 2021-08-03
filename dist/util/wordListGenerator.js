"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomWordList = void 0;

var _words = _interopRequireDefault(require("./words.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRandomWordList = (language, wordLimit) => {
  let wordCount = _words.default[language].length;
  let i = 0;
  let randomWords = [];

  while (i < wordLimit) {
    let random = Math.random();

    let word = _words.default[language][Math.floor(random * wordCount)];

    randomWords.push({
      word: word,
      class: i === 0 ? "highlight" : ""
    });
    i += 1;
  }

  return randomWords;
};

exports.getRandomWordList = getRandomWordList;