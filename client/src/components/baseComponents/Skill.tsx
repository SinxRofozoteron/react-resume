import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IndividualSkill as SkillProps } from "../../types/componentTypes";

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textColor};
`;

export const Skill: FC<SkillProps> = ({ name, isLink, value }) => {
  const encodedName = name.toLowerCase().split(" ").join("-");

  return (
    <li value={value}>
      {isLink ? (
        <StyledLink to={`/skill/${encodedName}`}>{name}</StyledLink>
      ) : (
        <span>{name}</span>
      )}
    </li>
  );
};
