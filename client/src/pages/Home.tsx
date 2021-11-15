import { FC } from "react";
import styled from "styled-components";

import MainPhoto from "../components/lowLevel/MainPhoto";

const HomePageLayout = styled.main`
  width: 100%;
  margin-top: 4.5rem;
`;

export const HomePage: FC = () => {
  return (
    <HomePageLayout>
      <MainPhoto />
    </HomePageLayout>
  );
};
