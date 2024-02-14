import { ThemeProvider } from 'styled-components';

import { ThemeName } from '../state/slices';
import { GlobalStyle, dark, light } from '../styles';
import { useSelector } from '../hooks';
import { selectTheme } from '../state';

import type { ReactNode } from 'react';

type StyleManagerProps = {
  children: ReactNode;
};

export const StyleManager = ({ children }: StyleManagerProps) => {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === ThemeName.LIGHT ? light : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
