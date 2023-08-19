import { css } from 'styled-components';

export const navLinkStyle = css`
  display: inline-block;
  background: inherit;
  border: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  ${({ theme }) => css`
    color: ${theme.textColor};
    &:hover {
      color: ${theme.fourthColor};
    }
  `}
`;
