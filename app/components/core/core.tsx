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
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;
