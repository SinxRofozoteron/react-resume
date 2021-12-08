import styled, { css } from "styled-components";

import { skills } from "../assets/info.json";
import Divider from "../components/models/Divider";
import SkillCard, { SkillCardProps } from "../components/technicalSkillsPage/SkillCard";

const MainContainer = styled.main`
    margin-top: 4.5rem;
    margin: 4.5rem auto 0 auto;
    max-width: 1250px;
    @media screen and (min-width: 380px) {
        width: 90%;
        margin: 4.5 auto 0 auto;
    }
`;
const StyledMainHeading = styled.h1`
    font-size: 1.75rem;
    text-align: center;
    padding: 5px;
    ${({ theme }) => css`
        background-color: ${theme.fourthColor};
        color: ${theme.primaryColor};
    `}

    @media screen and (min-width: 530px) {
        font-size: 2rem;
        padding: 10px;
    }
    @media screen and (min-width: 680px) {
        font-size: 2.3rem;
    }
`;

const StyledSectionHeading = styled.h2`
    text-align: center;
    margin-bottom: 5px;
    font-size: 2rem;
`;

const SkillsList = styled.ul`
    list-style-type: none;
    padding: 0 5px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    justify-content: center;

    @media screen and (min-width: 985px) {
        grid-template-columns: repeat(3, 1fr);
        align-content: stretch;

    }
`;

const TechnicalSkillsPage: React.FC = () => {
    const typedSkills = skills as {
        general: SkillCardProps[], technical: SkillCardProps[]
    };
    return (
        <MainContainer>
            <StyledMainHeading>List of industry skills</StyledMainHeading>
            <StyledSectionHeading>General</StyledSectionHeading>
            <Divider orientation="horizontal" width="10rem" horizontalMargin="auto" />
            <SkillsList>
                {typedSkills.general.map(
                    (skill, index) => <li key={index}><SkillCard {...skill} /></li>
                )}
            </SkillsList>
            <StyledSectionHeading>Technical</StyledSectionHeading>
            <Divider orientation="horizontal" width="10rem" horizontalMargin="auto" />
            <SkillsList>
                {typedSkills.technical.map(
                    (skill, index) => <li key={index}><SkillCard {...skill} /></li>
                )}
            </SkillsList>
        </MainContainer>
    );
};

export default TechnicalSkillsPage;