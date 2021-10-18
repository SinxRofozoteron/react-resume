import { FC } from "react";
import { useRouteMatch } from "react-router-dom";

import { SkillReactPage } from "./SkillReactPage";
import { SkillNodeJsPage } from "./SkillNodeJsPage";
import { SkillTsPage } from "./SkillTsPage";
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
    case "node-js":
      return <SkillNodeJsPage />
    default:
      return <Page404 />;
  }
}