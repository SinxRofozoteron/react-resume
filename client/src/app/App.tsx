import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../routes/ReactRouter";
import { StyleManager } from "../components/baseComponents/StyleManager";
import Header from "../components/baseComponents/Header";

const App: FC = () => {

  return (
    <StyleManager>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ StyleManager>
  );
};

export default App;
