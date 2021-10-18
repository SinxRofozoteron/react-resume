import { FC } from "react";
import styled, { css } from "styled-components";

import { Skill } from "./Skill";
import { IndividualSkill } from "../../types/componentTypes";

const skills: IndividualSkill[] = [
  { name: "JavaScript", isLink: false },
  { name: "TypeScript", isLink: false },
  { name: "Python", isLink: false },
  { name: "HTML", isLink: false },
  { name: "CSS", isLink: false },
  { name: "React", isLink: true },
  { name: "Node JS", isLink: true },
  { name: "Styled Components", isLink: true },
];

const SkillListWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.textColor};
    background-color: ${theme.thirdColor};
    border-radius: ${theme.borderRadius};
    .line {
      height: 1px;
      display: inline-block;
      width: 100%;
      background-color: ${theme.textColor};
    }
  `}
  grid-area: skilllist;
  padding: 2rem;
  h1 {
    font-size: 3rem;
    margin: 0.5rem;
  }
`;

const ListWithSkills = styled.ol`
  padding-inline-start: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    flex-shrink: 0;
    display: block;
    margin: 0.3rem;
    font-size: 1.5rem;
  }
  li::after {
    content: ", ";
  }
  li:last-child::after {
    content: "";
  }
`;

export const SkillsList: FC = () => {
  return (
    <SkillListWrapper>
      <h1>Technical Skills</h1>
      <span className="line"></span>
      <ListWithSkills>
        {skills.map((skill, index) => {
          const skillKey = skill.name.toLowerCase().split(" ").join("-");
          return (
            <Skill
              name={skill.name}
              isLink={skill.isLink}
              value={index + 1}
              key={skillKey}
            />
          );
        })}
      </ListWithSkills>
    </SkillListWrapper>
  );
};
