import { FC, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../../styles/GlobalStyle";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

import { ThemeToggle } from "./ThemeToggle";

export const StyleManager: FC = ({ children }) => {
    // Theme related logic
    const [theme, setTheme] = useState(light);
    const [isActive, setIsActive] = useState(true);

    const onToggle: React.MouseEventHandler<HTMLDivElement> = () => {
        setTheme((state) => (state.id === "dark" ? light : dark));
        setIsActive((state) => !state);
    };
    return (<>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ThemeToggle isActive={isActive} onToggle={onToggle} />
            {children}
        </ThemeProvider >
    </>
    )
}