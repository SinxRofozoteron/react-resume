import type { ValueOf } from 'next/dist/shared/lib/constants';

export const ThemeName = {
  DARK: 'dark',
  LIGHT: 'light'
} as const;

export type ViewState = {
  theme: ValueOf<typeof ThemeName>;
  screenWidth?: number;
  activeCodeEditorFile: string | null;
};
