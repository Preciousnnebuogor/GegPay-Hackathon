import { DefaultTheme } from "styled-components";

export const themeLight: DefaultTheme = {
  colors: {
    background1: "#f7f8fa",
    background2: "#fff",
    border: "#dadddd",
    primary: "#34CAA5",
    secondary: "#6dbeaa",
    text1: "#000",
    text2: "#313131",
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
