import { ThemeProvider } from "styled-components";

const theme = {
    mainBackgroundColor: "#14213D",
    altBackgroundColor: "#FCA311",

    mainTextColor: "#CCCCCC",
    mainHighlightColor: "#FFFFFF",

    correctColor:  "#F1C47B",
    incorrectColor: "#886227",
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;