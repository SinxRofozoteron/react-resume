import styled, { css } from "styled-components";
import { darken } from "polished";

export const Photo = styled.img`
  ${({ theme }) => css`
    color: ${theme.textColor};
    border: 2px solid ${theme.secondaryColor};
    border-radius: ${theme.borderRadius};
    box-shadow: -5px 5px 2px 1px ${darken(0.05, theme.primaryColor)};
  `}
  grid-area: photo;
  display: block;
  width: 100%;
  max-width: 340px;
  height: auto;
  filter: contrast(110%);
`;
