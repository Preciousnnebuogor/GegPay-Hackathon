import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";
import { SalesTrendChart } from "./SalestrendChart";

export function SalesTrend() {
  return (
    <Wrapper>
      <div className={"content"}>
        <div className={"trend"}>
          <p>Sales Trends</p>
        </div>
        <div className={"bracket"}>
          <p>Short by: </p>
        </div>
        <div className={"page"}>
          <p>Weekly</p>
          <Image
            src={AppImages.arrow}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
        </div>
      </div>
      <SalesTrendChart/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: #8d3434;
  border-radius: 10px;
  margin-bottom: 20px;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .trend {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bracket {
      padding-left: 60%;
    }
    .page {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 25px;
      border: solid 1px #dadddd;
      padding: 10px;
      font-family: small;
    }
    .icon {
      margin-left: 5px;
    }
  }
`;
