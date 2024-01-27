"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { themeLight } from "../styles";

export function StylesProvider(props: { children: ReactNode }) {
  return <ThemeProvider theme={themeLight}>{props.children}</ThemeProvider>;
}
