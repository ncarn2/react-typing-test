import { ThemeProvider } from "styled-components";

const theme = {
    mainBackgroundColor: "#264653",
    altBackgroundColor: "#E9C46A",

    mainTextColor: "#2A9D8F",
    mainHighlightColor: "#E9C46A",

    correctColor:  "#F4A261",
    incorrectColor: "#E76F51",
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;