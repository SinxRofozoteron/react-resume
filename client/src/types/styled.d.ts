import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    primaryColor: string;
    secondaryColor: string;
    thirdColor: string;
    textColor: string;
    borderRadius: string;
  }
}
