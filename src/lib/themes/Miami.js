import { ThemeProvider } from "styled-components";

const theme = {
    mainBackgroundColor: "#560BAD",
    altBackgroundColor: "#4CC9F0",

    mainTextColor: "#F72585",
    mainHighlightColor: "#4361EE",

    correctColor:  "#944BBB",
    incorrectColor: "#4CC9F0",
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;