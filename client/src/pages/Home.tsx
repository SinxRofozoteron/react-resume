import { FC } from "react";
import styled from "styled-components";

import MainPhoto from "../components/homePage/MainPhoto";
import UpperLinkToSkills from "../components/homePage/UpperLinkToSkills";
import Article from "../components/homePage/HomePageArticle";

const HomePageLayout = styled.main`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  max-width: 1250px;
  .container {
    position: relative;
  }
`;

export const HomePage: FC = () => {
  return (
    <HomePageLayout>
      <div className="container">
        <UpperLinkToSkills />
        <MainPhoto />
      </div>
      <Article />
    </HomePageLayout>
  );
};
