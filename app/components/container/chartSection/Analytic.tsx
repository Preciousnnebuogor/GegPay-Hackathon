import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
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
        boxIcon={AppImages.cube1}
      />
      <AnalyticCard
        name={"Total Refund"}
        num={"270"}
        isGreen={false}
        percent={"23,5%"}
        chartImg={AppImages.chart2}
        boxIcon={AppImages.cube2}
      />
      <AnalyticCard
        name={"Average Sales"}
        num={"1567"}
        isGreen={false}
        percent={"23,5%"}
        chartImg={AppImages.chart3}
        boxIcon={AppImages.cube3}
      />
      <AnalyticCard
        name={"Total Income"}
        num={"$350.000"}
        isGreen
        percent={"23,5%"}
        chartImg={AppImages.chart4}
        boxIcon={AppImages.cube4}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  row-gap: 15px;
  width: 40%;
  margin-bottom: 10px;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: 10px;
  }
`;
