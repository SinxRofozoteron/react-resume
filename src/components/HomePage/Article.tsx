import styled, { keyframes } from 'styled-components';
import { transparentize } from 'polished';

import { ExperienceList } from './ExperienceList';
import { MainHomePageHeading } from './MainHomePageHeading';
import { Summary } from './Summary';

const animation = keyframes`
  to {
    margin-top: calc(4.5rem + 436px + 5rem + 436px);
  }
`;

const StyledArticle = styled.article`
  position: relative;
  top: -43px;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 870px;

  @media screen and (min-width: 1700px) {
    margin-top: calc(4.5rem + 436px + 5rem);
    background-color: ${({ theme }) => transparentize(0.5, theme.primaryColor)};

    animation: ${animation} linear forwards;
    animation-timeline: scroll();
    animation-range: 0 436px;
  }
`;

export const Article = () => {
  return (
    <StyledArticle>
      <MainHomePageHeading />
      <TextContainer>
        <Summary />
        <ExperienceList />
      </TextContainer>
    </StyledArticle>
  );
};
