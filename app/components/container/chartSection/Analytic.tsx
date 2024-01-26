import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";

export function AnalyticTrend() {
  return (
    <Wrapper>
      <div className={"content"}>
        <div className={"cube"}>
        <Image
            src={AppImages.cube1}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <Image
            src={AppImages.chart1}
            alt=""
            height={40}
            width={85}
            className={"icon"}
          />
          </div>
          <div className={"number"}>
            <p>Total Order</p>
            <p>350</p>
          </div>
          <div>
          <Image
            src={AppImages.arrow1}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p>23,5%</p>
          <p>vs. previous month</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
