import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";

export function AnalyticCard() {
  return (
    <Wrapper>
      <div className={"content"}>
        <div className={"cube"}>
          <div className={"image1"}>
            <Image src={AppImages.cube1} alt="" height={17} width={17} />
          </div>

          <Image
            src={AppImages.chart1}
            alt=""
            height={40}
            width={85}
            className={"icon"}
          />
        </div>
        <div className={"number"}>
          <p className={"number1"}>Total Order</p>
          <p className={"number2"}>350</p>
        </div>
        <div className={"arrow"}>
          <div className={"arrow1"}>
            <Image
              src={AppImages.arrow1}
              alt=""
              height={17}
              width={17}
              className={"img"}
            />
            <p>23,5%</p>
          </div>
          <div className={"arrow2"}>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 10px;

  .cube {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .image1 {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      border: solid 1px #dadddd;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
  }

  .number1 {
    color: #898989;
    font-size: 12px;
  }
  .number2 {
    font-weight: 600;
    font-size: 14px;
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    .arrow1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 62px;
      border-radius: 23px;
      font-size: 10px;
      padding: 3px 8px;
      color: #34caa5;
      background-color: #34caa51f;
      font-weight: 500;
      margin-right: 5px;

      .img {
        margin-right: 5px;
      }
    }
    .arrow2 {
      font-size: 14px;
      color: #606060;
    }
  }
`;
