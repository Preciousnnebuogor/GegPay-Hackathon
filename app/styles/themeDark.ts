import { DefaultTheme } from "styled-components";

export const themeDark: DefaultTheme = {
  colors: {
    background1: "#001e28",
    background2: "#021117",
    border: "",
    primary: "#34CAA5",
    secondary: "#07252e",
    text1: "#fff",
    text2: "grey",
  },
  breakpoints: {
    sm: "screen and (max-width: 600px)",
    md: "screen and (max-width: 900px)",
  }, 
  borderRadius: {
    section: "20px",
    card: "10px",
  },
};
