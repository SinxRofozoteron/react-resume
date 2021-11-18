import { FC } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";

import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import { ReactComponent as DarkArrow } from "../../assets/arrow-right-dark.svg";
import { ReactComponent as LightArrow } from "../../assets/arrow-right-light.svg";

const svgStyle = css`
  height: 2rem;
  width: auto;
  margin-left: 0.3rem;
`;

const StyledLink = styled(Link)`
    &:before {
        content: "Technical Skills";
    }
    top: 5px;
    right: 10px;
    font-size: 1.75rem;
    font-family: inherit;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 1;
    padding: 5px;
    ${({ theme }) => css`
      color: ${theme.textColor};
      background-color: ${transparentize(0.7, theme.primaryColor)};
    `}

    @media screen and (min-width: 375px) {
        right: auto;
        left: 10px;
    }
    @media screen and (min-width: 500px) {
        &:before {
            content: "Visit Technical Skills page";
        }
    }
    @media screen and (min-width: 820px) {
        font-size: 2rem;
    }
`;

const StyledDarkArrow = styled(DarkArrow)`${svgStyle}`;
const StyledLightArrow = styled(LightArrow)`${svgStyle}`;

const UpperLinkToSkills: FC = () => {
    const { theme } = useAppSelector((state) => state.theme);
    return (
        <StyledLink to="/technicalskills">
            {theme === ThemeName.light ? <StyledDarkArrow /> : <StyledLightArrow />}
        </StyledLink>
    )
}

export default UpperLinkToSkills;