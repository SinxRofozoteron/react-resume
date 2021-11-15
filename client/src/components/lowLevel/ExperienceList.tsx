import { FC } from "react";
import styled, { css } from "styled-components";

import { ExperienceProps } from "../../types/componentTypes";
import { ExperienceCard } from "./ExperienceCard";

const allExperience: ExperienceProps[] = [
  {
    companyName: "Alteryx",
    location: "Broomfield, CO",
    position: "Software Development Engineer in Test",
    dates: "July 2020 - Present",
    description: [
      "Regularly develop automated tests with Python, Selenium that are pivotal to detecting new unique breaking issues in company software",
      "Develop setup and configuration framework that prepare environments for automated testing",
      "Provide informative and comprehensive code reviews",
      "Major participant in focus feature tests and successful company wide bug bashes",
      "Maintain an existing automated test suite, reporting and tracking any defects with Rally while also creating system level test cases that follow real workflow processes using TestRail",
    ],
  },
  {
    companyName: "Glacier",
    location: "Aurora, CO",
    position: "QA Automation Engineer",
    dates: "June 2018 - July 2020",
    description: [
      "Created internal automation framework for automating different GUI tests with Python, Selenium",
      "Utilized over 5 different types of testing including functional, regression, and usability to effectively test products and determine issues before they were released into the public",
      "Reported over 150 defects with Jira in an Agile environment, using Python and Selenium WebDriver to write over 30 automation tests",
    ],
  },
  {
    companyName: "FrontH",
    location: "New York, NY",
    position: "QA Engineer",
    dates: "March 2017 - May 2018",
    description: [
      "Successfully found and reported over 60 critical product defects and contributed to their resolution",
      "Developed different kinds of tests such as smoke and sanity to further contribute and support efforts within test automation framework",
      "Completed manual testing of over 3 web based products, creating efficient test documents that were beneficial to everyone",
    ],
  },
];

const StyledOl = styled.ol`
  ${({ theme }) => css`
    background-color: ${theme.thirdColor};
    border-radius: ${theme.borderRadius};
  `};
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  list-style-type: none;
  padding-inline-start: 0;
  padding: 2rem;
  grid-area: exp;
  height: auto;
  li {
    margin: 5px;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const ExperienceList: FC = () => {
  return (
    <StyledOl>
      {allExperience.map((exp, index) => (
        <ExperienceCard
          companyName={exp.companyName}
          location={exp.location}
          position={exp.position}
          dates={exp.dates}
          description={exp.description}
          key={index}
          value={index + 1}
        />
      ))}
    </StyledOl>
  );
};
