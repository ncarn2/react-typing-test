"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Word = exports.BottomBar = exports.RedoButton = exports.Input = exports.MainContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

let mainBackgroundColor = "#2E2C2F";
let altBackgroundColor = "#3B4449";
let mainTextColor = "#E5D4ED";
let mainHighlightColor = "#AA7BC3";
let correctTextColor = "#944BBB";
let incorrectTextColor = "#A54657";
let correctInputColor = "#944BBB";
let incorrectInputColor = "#A54657";

const MainContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: auto;\n    font-family: 'Helvetica', 'sans-serif';\n\n    border-radius: 12px;\n    max-width: 40rem;\n    min-width: 25rem;\n\n    background-color: ", ";\n    color: ", ";\n    \n    padding: 12px;\n;"])), mainBackgroundColor, mainTextColor);

exports.MainContainer = MainContainer;

const Input = _styledComponents.default.input(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    outline: none;\n    border: none;\n\n    background-color: ", ";\n    color: ", ";\n\n    max-width: 90%;\n    border-radius: 2px;\n    caret-color: white;\n\n    &.incorrect {\n        background-color: ", ";\n    }\n\n    &:focus, &:hover {\n        border: 1px solid ", ";\n    }\n"])), altBackgroundColor, mainTextColor, incorrectInputColor, mainHighlightColor);

exports.Input = Input;

const RedoButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n\n    outline: none;\n    border: none;\n\n    padding: 4px;\n\n    min-height: 25px;\n\n    border-radius: 12px;\n\n    &:hover, &:focus {\n        cursor: pointer;\n        color: ", ";\n    }\n"])), mainTextColor, altBackgroundColor, mainHighlightColor);

exports.RedoButton = RedoButton;

const BottomBar = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns: 2fr 0.5fr;\n    text-align: center;\n"])));

exports.BottomBar = BottomBar;

const Word = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 0 4px 0 4px;\n    font-size: 16px;\n    display: inline-block;\n\n    &.highlight {\n        color: ", ";\n    }\n\n    &.correct {\n        color: ", ";\n    }\n\n    &.incorrect {\n        color: ", ";\n    }\n"])), mainHighlightColor, correctTextColor, incorrectTextColor);

exports.Word = Word;