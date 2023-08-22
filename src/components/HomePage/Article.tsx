import styled from 'styled-components';

import { ExperienceList } from './ExperienceList';
import { MainHomePageHeading } from './MainHomePageHeading';
import { Summary } from './Summary';

const StyledArticle = styled.article`
  position: relative;
  top: -43px;
  .content {
    padding: 0 15px;
    max-width: 870px;
    margin: 0 auto;
  }
`;

export const Article = () => {
  return (
    <StyledArticle>
      <MainHomePageHeading />
      <div className="content">
        <Summary />
        <ExperienceList />
      </div>
    </StyledArticle>
  );
};
