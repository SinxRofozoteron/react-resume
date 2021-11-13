import { FC } from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import { ThemeToggle } from "./ThemeToggle";
import Navigation from "./HeaderNavigation";

const StyledHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 100;
  ${({ theme }) => css`
    background-color: ${transparentize(0.2, theme.primaryColor)};
  `}
`;


const Header: FC = () => {

    return (
        <StyledHeader>
            <ThemeToggle />
            <Navigation />
        </StyledHeader>
    );
};

export default Header;