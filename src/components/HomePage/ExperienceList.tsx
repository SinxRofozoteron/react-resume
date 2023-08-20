import styled from 'styled-components';

import { ExperienceCard } from './ExperienceCard';

import info from '@/public/info.json';

const StyledList = styled.ol`
  padding: 0;
  > li {
    font-size: 1.3rem;
    list-style: none;
  }
`;

export const ExperienceList = () => {
  return (
    <>
      <h2 id="experience">Experience</h2>
      <StyledList id="experience-list">
        {info.experience.map((exp, index) => (
          <li value={index + 1} key={index + 1}>
            <ExperienceCard {...exp} />
          </li>
        ))}
      </StyledList>
    </>
  );
};
