import { ThemeProvider } from "styled-components";

const theme = {
    mainBackgroundColor: "#FF4800",
    altBackgroundColor: "#FF5400",

    mainTextColor: "#FFB600",
    mainHighlightColor: "#FF9100",

    correctColor:  "#944BBB",
    incorrectColor: "#A54657",
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;