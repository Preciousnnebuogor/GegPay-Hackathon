import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";
import { AnalyticCard } from "./AnalyticsCard";

export function AnalyticTrend() {
  return (
    <Wrapper>
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
      <AnalyticCard />
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
`;
