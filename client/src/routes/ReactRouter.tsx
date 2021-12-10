import { Route, Switch } from "react-router-dom";

import TechnicalSkillsPage from "../pages/TechnicalSkillsPage";
import { HomePage } from "../pages/Home";
import { SkillPage } from "../pages/SkillPage";
import { Page404 } from "../pages/404";

const ResumeRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/technicalskills">
        <TechnicalSkillsPage />
      </Route>
      <Route path="/skills/:skillName">
        <SkillPage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};

export default ResumeRouter;
