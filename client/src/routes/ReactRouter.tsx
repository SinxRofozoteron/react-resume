import { Route, Switch, BrowserRouter } from "react-router-dom";

import { HomePage } from "../components/pages/Home";
import { SkillPage } from "../components/pages/SkillPage";

const ResumeRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/skill/:skillName">
          <SkillPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default ResumeRouter;
