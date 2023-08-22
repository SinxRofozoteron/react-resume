import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { Barlow } from 'next/font/google';

export const defaultFont = Barlow({ subsets: ['latin'], weight: '400' });

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body {
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.primaryColor};
        box-sizing: border-box;
        color: ${({ theme }) => theme.textColor};
        font-family: "Barlow", sans-serif;
        p {
            font-size: 1.3rem;
        }

        transition: background-color linear 300ms;

        * {
            transition: background-color linear 300ms;
        }

        *, *:before, *:after {
            box-sizing: inherit;
        }
    }
`;
