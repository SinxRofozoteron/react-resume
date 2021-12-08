import { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../app/hooks";
import { ThemeName } from "../../features/theme-slice";
import plusLightPng from "../../assets/plus-light.png";
import plusDarkPng from "../../assets/plus-dark.png";
import minusLightPng from "../../assets/minus-light.png";
import minusDarkPng from "../../assets/minus-dark.png";
import SkillHead from "./SkillHead";

export interface SkillCardProps {
    name: string;
    link: false | string;
    description: string;
}

const MainContainer = styled.div<{ href?: string }>`
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
    }
`;

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
        <MainContainer
            as={isWideScreen && link ? "a" : "div"}
            href={isWideScreen && link ? link : undefined}
            className={description ? "with-description" : ""}
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
        </MainContainer>
    );
};

export default SkillCard;