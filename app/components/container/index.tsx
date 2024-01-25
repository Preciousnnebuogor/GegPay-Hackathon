import { BottonSection } from "./bottomSection";
import { ChartSection } from "./chartSection";
import { TopBarComp } from "./topBar";
import styled from "styled-components";

export function Container() {
  return (
    <Wrapper>
      <TopBarComp />
      <div className={"content"}>
        <ChartSection/>
        <BottonSection /></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width:100%;
  .content{
    padding:20px;
  }
`;
