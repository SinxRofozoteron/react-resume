import { createGlobalStyle } from "styled-components";
import playFairDisplay400 from "./fonts/playfairDisplay-Regular.ttf";
import playFairDisplay700 from "./fonts/playfairDisplay-Bold.ttf";
import playFairDisplay700Italic from "./fonts/playfairDisplay-BoldItalic.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Playfair Display";
        src: url(${playFairDisplay400}) format("truetype");
    }
    @font-face {
        font-family: "Playfair Display";
        src: url(${playFairDisplay700}) format("truetype");
        font-weight: 700;
    }
    @font-face {
        font-family: "Playfair Display";
        src: url(${playFairDisplay700Italic}) format("truetype");
        font-weight: 700;
        font-style: italic;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.primaryColor};
        min-height: 100vh;
        box-sizing: border-box;
        color: ${({ theme }) => theme.textColor};
        font-family: "Playfair Display", "Times New Roman", serif;

        transition: background-color linear 300ms;

        * {
            transition: background-color linear 300ms;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }

        h1 {
            font-family: "Playfair Display", "Times New Roman", serif;
            font-weight: bold;
            font-style: italic;
        }

        h2 {
            font-family: "Playfair Display", "Times New Roman", serif;
            font-weight: bold;
        }
    }
`;

export default GlobalStyle;
