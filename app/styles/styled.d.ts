import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background1: string;
      background2: string;
      primary: string;
      text1: string;
      text2: string;
    };
    breakpoints: {
      sm: "screen and (max-width: 600px)";
      md: "screen and (max-width: 900px)";
    };
    borderRadius: {
      section: "20px";
      card: "10px";
    };
  }
}
