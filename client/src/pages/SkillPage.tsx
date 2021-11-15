import { FC, Suspense, lazy, ReactNode } from "react";
import { useRouteMatch } from "react-router-dom";

import { Page404 } from "./404";
import ErrorBoundary from "../components/lowLevel/ErrorBoundry";
const SkillReactPage = lazy(() => import("./SkillReactPage"));
const SkillNodeJsPage = lazy(() => import("./SkillNodeJsPage"));
const SkillTsPage = lazy(() => import("./SkillTsPage"));

interface SkillRouteParams {
  skillName: string;
}

export const SkillPage: FC = () => {
  const { params } = useRouteMatch<SkillRouteParams>();

  const resolveSkillPage = (): ReactNode => {
    switch (params.skillName) {
      case "typescript":
        return <Suspense fallback="Loading..."><SkillTsPage /></Suspense>;
      case "react":
        return <Suspense fallback="Loading..."><SkillReactPage /></Suspense>;
      case "node-js":
        return <Suspense fallback="Loading..."><SkillNodeJsPage /></Suspense>;
      default:
        return <Page404 />;
    }
  }

  return (
    <ErrorBoundary>
      {resolveSkillPage()}
    </ErrorBoundary>
  )

}