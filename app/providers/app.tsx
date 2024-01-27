import React, { ReactNode } from "react";
import { StylesProvider } from "./styles";

export function AppProviders(props: { children: ReactNode }) {
  return <StylesProvider>{props.children}</StylesProvider>;
}
