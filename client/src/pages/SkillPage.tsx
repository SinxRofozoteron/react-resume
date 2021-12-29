import { Suspense, lazy, ReactNode } from "react";
import { useRouteMatch } from "react-router-dom";
import styled, { css } from "styled-components";

import { Page404 } from "./404";
import ErrorBoundary from "../components/lowLevel/ErrorBoundry";
const SkillReactContent = lazy(() => import("../components/highLevel/SkillReactContent"));
const SkillNodeJsContent = lazy(() => import("../components/highLevel/SkillNodeJsContent"));

interface SkillRouteParams {
  skillName: string;
}
const PageLayout = styled.main`
  margin: 4.5rem auto 0 auto;
  max-width: 1250px;

  h1 {
    font-size: 2.5rem;
    text-align: center;
    padding: 10px;
    ${({ theme }) => css`
      background-color: ${theme.fourthColor};
      color: ${theme.primaryColor};
    `}
  }

  p {
    font-size: 1.5rem;
    padding: 0 10px;
  }

  @media screen and (min-width: 490px) {
    width: 90%;
    p {
      margin: 15px auto;
      padding: 0;
      font-size: 1.7rem;
    }
  }
`;

export const SkillPage: React.FC = () => {
  const { params } = useRouteMatch<SkillRouteParams>();

  const resolveSkillPage = (): ReactNode => {
    switch (params.skillName) {
      case "react":
        return <Suspense fallback="Loading..."><SkillReactContent /></Suspense>;
      case "node-js":
        return <Suspense fallback="Loading..."><SkillNodeJsContent /></Suspense>;
      default:
        return <Page404 />;
    }
  }

  return (
    <ErrorBoundary>
      <PageLayout>
        {resolveSkillPage()}
      </PageLayout>
    </ErrorBoundary>
  )

}