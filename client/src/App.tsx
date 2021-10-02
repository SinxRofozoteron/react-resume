import { useState, FC } from "react";
import Router from "./routes/ReactRouter";
import { ThemeProvider, ThemeContext } from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import { ThemeToggle } from "./components/baseComponents/ThemeToggle";

const App: FC = () => {
  const [theme, setTheme] = useState(light);
  const [isActive, setIsActive] = useState(true);

  const onToggle: React.MouseEventHandler<HTMLDivElement> = () => {
    setTheme((state) => (state.id === "dark" ? light : dark));
    setIsActive((state) => !state);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeToggle isActive={isActive} onToggle={onToggle} />
      <Router />
    </ThemeProvider>
  );
};

export default App;
