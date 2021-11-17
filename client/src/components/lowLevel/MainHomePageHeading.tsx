import { FC, useEffect, useCallback, useState } from "react";
import styled, { css } from "styled-components";

import Divider from "../models/Divider";

const StyledH1 = styled.h1`
    padding: 0 10px;
    display: inline-flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    font-size: 1.75rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: -15px;
    z-index: 2;
    @media screen and (min-width: 375px) {
        width: 90%;
        font-size: 2rem;
    } 

    @media screen and (min-width: 410px) {
        width: 80%;
    }

    ${({ theme }) => css`
      color: ${theme.primaryColor};
      background-color: ${theme.fourthColor};

      @media screen and (min-width: 591px) {
        flex-direction: row;
        margin: 0;
        width: auto;
        left: 20px;
        right: auto;
        bottom: 0;
        &:after {
            position: absolute;
            content: "";
            background-color: ${theme.fourthColor};
            transform: skew(150deg);
            transform-origin: bottom;
            top: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
            width: 50%;
      }
      }
    `}
`;

const StyledDivider = styled(Divider).attrs((props) => ({
    color: props.theme.primaryColor
}))``;

const MainHomePageHeading: FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 591);
    const resizeHandler = useCallback(function () {
        setIsSmallScreen(window.innerWidth < 591);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [resizeHandler])

    return (
        <StyledH1>
            <span className="name" >Aliaksandr Burakou</span>
            <StyledDivider
                orientation={isSmallScreen ? "horizontal" : "vertical"}
                height={isSmallScreen ? "1px" : "2rem"}
                width={isSmallScreen ? "60%" : "1px"}
                verticalMargin={"0"}
            />
            <span>Resume</span>
        </StyledH1>
    );
};

export default MainHomePageHeading;