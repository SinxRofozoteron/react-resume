import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "../routes/ReactRouter";
import { StyleManager } from "../components/lowLevel/StyleManager";
import Footer from "../components/highLevel/Footer";
import Header from "../components/highLevel/Header";

const App: FC = () => {

  return (
    <StyleManager>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ StyleManager>
  );
};

export default App;
