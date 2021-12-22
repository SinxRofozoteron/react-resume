import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import plusLightPng from "../../assets/plus-light.png";
import plusDarkPng from "../../assets/plus-dark.png";
import minusLightPng from "../../assets/minus-light.png";
import minusDarkPng from "../../assets/minus-dark.png";
import SkillHead from "./SkillHead";
import ConditionalWrapper from "../models/ConditionalWrapper";

export interface SkillCardProps {
    name: string;
    link: false | string;
    description: string;
}

const MainContainer = styled.div`
    @media screen and (min-width: 985px) {
        display: block;
        padding: 5px;
        background-color: ${({ theme }) => theme.secondaryColor};
        height: 100%;
        &.with-description {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        text-decoration: none;
    }
`;
let LinkWrapper = MainContainer.withComponent(Link);
LinkWrapper = styled(LinkWrapper)`
    :hover {
        position: relative;
        top: -5%;
        left: -5%;
        right: 10px;
        bottom: 10px;
        height: 110%;
        width: 110%;
        padding: 10px;
    }
`;
// Preset ConditionalWrapper
const MainWrapper: React.FC<{
    isWideScreen: boolean,
    link: false | string,
    description: string
}> = ({ isWideScreen, link, children, description }) => {

    if (isWideScreen) {
        if (link) {
            return (
                <ConditionalWrapper
                    condition={true}
                    wrapper={LinkWrapper}
                    to={link}
                    className={description ? "with-description" : ""}
                >
                    {children}
                </ConditionalWrapper>
            );
        } else {
            return (
                <ConditionalWrapper
                    condition={true}
                    wrapper={MainContainer}
                    className={description ? "with-description" : ""}
                >
                    {children}
                </ConditionalWrapper>
            );
        }
    } else {
        return <>{children}</>;
    }
}

const MainSkillBar = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: solid 1px ${({ theme }) => theme.textColor};
    margin-bottom: 10px;
    svg {
        height: 2rem;
        width: auto;
        flex-shrink: 0;
    }
    svg.icon {
        margin-right: 5px;
    }
    .extender {
        height: 2rem;
        width: auto;
        :hover {
            height: 2.2rem;
        }
    }
    @media screen and (min-width: 985px) {
        border-bottom: none;
        display: block;
        svg {
            height: 4rem;
        } 
        .extender {
            display: none;
        }  
    }
`;

const Description = styled.p`
    max-height: 0;
    margin: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    @media screen and (min-width: 985px) { 
        max-height: none;
        margin: 0 10px 10px 10px;
    }
`;

const ToggleButton = styled.button`
    background: none;
    padding: 0;
    border: none;
`;

const SkillCard: React.FC<SkillCardProps> = ({ name, link, description }) => {
    const { theme } = useAppSelector(state => state.theme);
    const [expanded, setExpanded] = useState(false);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    // Determing if at the breakpoint
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 985);
    const resizeHandler = useCallback(function () {
        setIsWideScreen(window.innerWidth >= 985);
    }, []);
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [resizeHandler])

    function extendHandler() {
        setExpanded(state => !state);
    }
    useEffect(() => {
        // Setting max-height of description collapsable here
        // for transition to work
        if (descriptionRef.current && window.innerWidth < 985) {
            const scrollHeight = descriptionRef.current!.scrollHeight;
            if (expanded) {
                descriptionRef.current.style.maxHeight = scrollHeight.toString() + "px";
            } else {
                descriptionRef.current.style.maxHeight = "0";
            }
        }
    }, [expanded])

    return (
        <MainWrapper
            isWideScreen={isWideScreen}
            link={link}
            description={description}
        >
            <MainSkillBar>
                <SkillHead name={name} asLink={!!link && !isWideScreen} link={link} />
                {description
                    ?
                    <ToggleButton
                        onClick={extendHandler}
                        aria-expanded={expanded ? "true" : "false"}
                    >
                        <img
                            src={theme === ThemeName.light
                                ? (expanded ? minusDarkPng : plusDarkPng)
                                : (expanded ? minusLightPng : plusLightPng)}
                            className="extender"
                            alt={expanded ? "Plus" : "Minus"}
                        />
                    </ToggleButton>
                    : false}
            </MainSkillBar>
            {description
                ? <Description
                    ref={descriptionRef}
                >
                    {description}
                </Description>
                : false
            }
        </MainWrapper>
    );
};

export default SkillCard;