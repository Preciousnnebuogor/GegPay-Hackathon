import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";
import { SalesTrendChart } from "./SalestrendChart";

export function SalesTrend() {
  return (
    <Wrapper>
      <div className={"content"}>
        <p className={"first"}>Sales Trends</p>

        <div className={"second"}>
          <p>Short by: </p>
          <div className={"weekly"}>
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
      </div>
      <SalesTrendChart />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.text1};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media ${(props) => props.theme.breakpoints.sm} {
      /* flex-direction: column; */
    }
    .first {
      font-size: 12px;
    }
    .second {
      padding-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin-right: 20px;
        font-size: 12px;
      }
      .weekly {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 25px;
        border: solid 1px ${(props) => props.theme.colors.border};
        padding: 3.5px 10px;
        font-size: 10px;
        p {
          margin-right: 10px;
        }
      }
    }

    .icon {
      margin-left: 5px;
    }
  }
`;
