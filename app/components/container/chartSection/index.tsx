import styled from "styled-components";
import { SalesTrend } from "./Salestrend";
import { AnalyticTrend } from "./Analytic";

export function ChartSection() {
  return (
    <Wrapper>
      <SalesTrend />
      <div className="spacer" />
      <AnalyticTrend />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 250px;
  /* background-color: green; */
  margin-bottom: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    height: auto;
  }
  .spacer {
    width: 15px;
  }
`;
