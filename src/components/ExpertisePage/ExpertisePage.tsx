import styled, { css } from 'styled-components';

import { Divider } from '../common';
import { SkillCard } from './SkillCard';
import { ExpertisePageInfo } from './ExpertisePageInfo';

import technicalSkillsInfo from '@/public/technicalSkills.json';
import coreCompetencesInfo from '@/public/coreCompetences.json';

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

export const ExpertisePage = () => {
  return (
    <MainContainer>
      <StyledMainHeading>List of industry skills</StyledMainHeading>
      <ExpertisePageInfo />
      <StyledSectionHeading>Core Competences</StyledSectionHeading>
      <Divider orientation="horizontal" width="10rem" horizontalMargin="auto" />
      <SkillsList>
        {coreCompetencesInfo.map((skill, index) => (
          <li key={index}>
            <SkillCard {...skill} />
          </li>
        ))}
      </SkillsList>
      <StyledSectionHeading>Technical Skills</StyledSectionHeading>
      <Divider orientation="horizontal" width="10rem" horizontalMargin="auto" />
      <SkillsList>
        {technicalSkillsInfo.map((skill, index) => (
          <li key={index}>
            <SkillCard {...skill} />
          </li>
        ))}
      </SkillsList>
    </MainContainer>
  );
};
