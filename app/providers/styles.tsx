"use client";
import React, { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "../styles";

export const AppThemeContext = React.createContext<{
  fn: VoidFunction;
  isDark: boolean;
}>({
  fn: () => {},
  isDark: true,
});

export function StylesProvider(props: { children: ReactNode }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    console.log("Toggle theme");
    setDarkTheme((prev) => !prev);
  };
  return (
    <AppThemeContext.Provider value={{ isDark: darkTheme, fn: toggleTheme }}>
      <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
