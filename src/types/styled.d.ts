import 'styled-components';

declare module 'styled-components' {
  export type DefaultTheme = {
    id?: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    fourthColor: string;
    textColor: string;
    borderRadius: string;
  };
}
