import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    fourthColor: string;
    textColor: string;
    borderRadius: string;
  }
}
