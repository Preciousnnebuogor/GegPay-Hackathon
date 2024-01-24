import { BottonSection } from "./bottomSection";
import { TopBarComp } from "./topBar";
import styled from "styled-components";

export function Container() {
  return (
    <Wrapper>
      <TopBarComp />
      <BottonSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  width:100%;
`;
