import { ThemeProvider } from 'styled-components';

import { ThemeName } from '../state/slices';
import { GlobalStyle, dark, light } from '../styles';
import { useSelector } from '../hooks';

import type { ReactNode } from 'react';

type StyleManagerProps = {
  children: ReactNode;
};

export const StyleManager = ({ children }: StyleManagerProps) => {
  const theme = useSelector(state => state.view.theme);
  return (
    <ThemeProvider theme={theme === ThemeName.light ? light : dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
