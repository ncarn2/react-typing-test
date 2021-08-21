import { ThemeProvider } from "styled-components";

const theme = {
    mainBackgroundColor: "#2E2C2F",
    altBackgroundColor: "#3B4449",

    mainTextColor: "#E5D4ED",
    mainHighlightColor: "#AA7BC3",

    correctColor:  "#944BBB",
    correctColor: "#A54657",
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;