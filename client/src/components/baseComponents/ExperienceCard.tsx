import { FC } from "react";
import styled, { css } from "styled-components";

import { ExperienceProps } from "../../types/componentTypes";

const H2Styled = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const StyledLi = styled.li`
  ${({ theme }) => css`
    background-color: ${theme.secondaryColor};
    border-radius: ${theme.borderRadius};
  `}
  padding: 20px;
`;

const DescriptionList = styled.ul`
  list-style: disc;
  padding-inline-start: 30px;
  li::marker {
    color: ${({ theme }) => theme.thirdColor};
    border: 1px solid black;
    display: inline-block;
  }
`;

export const ExperienceCard: FC<ExperienceProps> = ({
  companyName,
  location,
  position,
  dates,
  description,
  value,
}) => {
  return (
    <StyledLi value={value}>
      <H2Styled>
        <span>{companyName}</span> | <span>{location}</span>
      </H2Styled>
      <H2Styled>
        <span>{position}</span> | <span>{dates}</span>
      </H2Styled>
      <DescriptionList>
        {description.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </DescriptionList>
    </StyledLi>
  );
};
