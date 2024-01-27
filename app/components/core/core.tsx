"use client";

import styled from "styled-components";
import { Container } from "../container";
import { SideBar } from "../sidebar";

export function AppCore() {
  return (
    <Wrapper>
      <SideBar />
      <Container />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  margin-left: 80px;
  background-color: ${(props) => props.theme.colors.background1};
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin-left: 0px;
  }
`;
