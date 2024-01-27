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
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
  .spacer {
    width: 20px;
  }
`;
