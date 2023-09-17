import { normalize } from 'polished';
import { createGlobalStyle, css } from 'styled-components';
import { Barlow } from 'next/font/google';

import { ACTIVE_TOUR_STEP_CLASS } from '../tour';

export const defaultFont = Barlow({ subsets: ['latin'], weight: '400' });

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    body {
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

    .${ACTIVE_TOUR_STEP_CLASS} {
        position: relative;
        ${({ theme }) => css`
          border: 1px solid ${theme.primaryColor};
          box-shadow:
            0 0 30px 10px ${theme.thirdColor},
            0 0 50px 10px ${theme.thirdColor},
            0 0 75px 10px ${theme.thirdColor};
        `}
    }
`;
