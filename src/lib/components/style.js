import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import RobotoMonoTTF from '../assets/RobotoMono-Medium.ttf';

let mainBackgroundColor = "#2E2C2F";
let altBackgroundColor = "#3B4449";

let mainTextColor = "#E5D4ED";
let mainHighlightColor = "#AA7BC3"; 

let correctTextColor =  "#944BBB";
let incorrectTextColor = "#A54657";

let correctInputColor =  "#944BBB";
let incorrectInputColor = "#A54657";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoTTF}) format('truetype');
    }

    * {
        font-family: 'Roboto Mono';
    }
`;

export const MainContainer = styled.div`
    margin: auto;
    font-family: 'Helvetica', 'sans-serif';

    border-radius: 12px;
    max-width: 40rem;
    min-width: 25rem;

    background-color: ${mainBackgroundColor};
    color: ${mainTextColor};
    
    padding: 12px;
;`

export const Input = styled.input`
    outline: none;
    border: none;

    background-color: ${altBackgroundColor};
    color: ${mainTextColor};

    max-width: 90%;
    border-radius: 2px;
    caret-color: white;

    &.incorrect {
        background-color: ${incorrectInputColor};
    }

    &:focus, &:hover {
        border: 1px solid ${mainHighlightColor};
    }
`;

export const RedoButton = styled.button`
    color: ${mainTextColor};
    background-color: ${altBackgroundColor};

    outline: none;
    border: none;

    padding: 4px;

    min-height: 25px;

    border-radius: 12px;

    &:hover, &:focus {
        cursor: pointer;
        color: ${mainHighlightColor};
    }
`;

export const BottomBar = styled.div`
    margin-top: 12px;
    display: grid;
    grid-template-columns: 2fr 0.5fr;
    text-align: center;
`;

export const Word = styled.span`
    padding: 0 4px 0 4px;
    font-size: 16px;
    display: inline-block;

    &.highlight {
        color: ${mainHighlightColor};
    }

    &.correct {
        color: ${correctTextColor};
    }

    &.incorrect {
        color: ${incorrectTextColor};
    }
`;