import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import barlow400 from "./fonts/Barlow-Regular.ttf";

const GlobalStyle = createGlobalStyle`
    ${normalize()}
    @font-face {
        font-family: "Barlow";
        src: url(${barlow400}) format("truetype");
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.primaryColor};
        box-sizing: border-box;
        color: ${({ theme }) => theme.textColor};
        font-family: "Barlow", sans-serif;

        transition: background-color linear 300ms;

        * {
            transition: background-color linear 300ms;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }
    }
`;

export default GlobalStyle;
