import { Route, Switch, BrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { SkillPage } from "../pages/SkillPage";

const ResumeRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/skill/:skillName">
          <SkillPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default ResumeRouter;
