import { FC } from "react";
import styled from "styled-components";

import { Photo } from "../components/baseComponents/Photo";
import { SkillsList } from "../components/baseComponents/SkillsList";
import { ExperienceList } from "../components/baseComponents/ExperienceList";

import photo from "../assets/main-photo.jpeg";

const HomePageLayout = styled.main`
  display: grid;
  width: 100%;
  max-height: 150vh;
  padding: 15px;
  grid-template: 1fr 2fr / 3fr 7fr;
  grid-template-areas: "photo skilllist" "exp exp";
  grid-gap: 20px 20px;
`;

export const HomePage: FC = () => {
  return (
    <HomePageLayout>
      <Photo src={photo} alt="Photo of an applicant" />
      <SkillsList />
      <ExperienceList />
    </HomePageLayout>
  );
};
