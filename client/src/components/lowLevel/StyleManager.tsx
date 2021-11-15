import { FC } from "react";
import { ThemeProvider } from "styled-components";

import { ThemeName } from "../../features/theme-slice";
import { useAppSelector } from "../../app/hooks";
import GlobalStyle from "../../styles/GlobalStyle";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { RootState } from "../../app/store";

export const StyleManager: FC = ({ children }) => {
    const { theme } = useAppSelector((state: RootState) => state.theme);
    return (
        <ThemeProvider theme={theme === ThemeName.light ? light : dark}>
            <GlobalStyle />
            {children}
        </ThemeProvider >
    )
}