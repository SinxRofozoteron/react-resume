import styled, { css } from "styled-components";

export const Button = styled.button`
    ${({ theme }) => css`
        color: ${theme.textColor};
        background-color: ${theme.secondaryColor};
        height: 35px;
        border: 1px solid ${theme.primaryColor};
        border-radius: 10px;
    `}
    * {
        text-decoration: none;
    }
`;