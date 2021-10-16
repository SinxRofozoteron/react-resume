import { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { SkillTsPage } from "./SkillTsPage";
import { SkillReactPage } from "./SkillReactPage";
import { Page404 } from "./404";

interface SkillRouteParams {
  skillName: string;
}

export const SkillPage: FC = () => {
  const { params } = useRouteMatch<SkillRouteParams>();

  switch (params.skillName) {
    case "typescript":
      return <SkillTsPage />;
    case "react":
      return <SkillReactPage />;
    default:
      return <Page404 />;
  }
}