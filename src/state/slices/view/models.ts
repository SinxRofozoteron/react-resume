export enum ThemeName {
  'dark',
  'light'
}

export type ViewState = {
  theme: ThemeName.dark | ThemeName.light;
  screenWidth?: number;
};
