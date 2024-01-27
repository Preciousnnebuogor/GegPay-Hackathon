import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";
import { AnalyticCard } from "./AnalyticsCard";

export function AnalyticTrend() {
  return (
    <Wrapper>
      <AnalyticCard
        name={"Total Order"}
        num={"350"}
        isGreen
        percent={"23,5%"}
        chartImg={AppImages.chart1}
      />
      <AnalyticCard
        name={"Total Refund"}
        num={"270"}
        isGreen={false}
        percent={"23,5%"}
        chartImg={AppImages.chart2}
      />
      <AnalyticCard
        name={"Average Sales"}
        num={"1567"}
        isGreen={false}
        percent={"23,5%"}
        chartImg={AppImages.chart3}
      />
      <AnalyticCard
        name={"Total Income"}
        num={"$350.000"}
        isGreen
        percent={"23,5%"}
        chartImg={AppImages.chart4}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
  width: 40%;
  margin-bottom: 10px;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: 10px;
  }
`;
