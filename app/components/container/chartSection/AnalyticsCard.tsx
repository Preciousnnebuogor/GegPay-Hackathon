import { AppImages } from "@/app/utils/AppImages";
import styled from "styled-components";
import Image from "next/image";

type IProps = {
  name: string;
  num: string;
  isGreen: boolean;
  percent: string;
  chartImg: string;
  boxIcon: string;
};
export function AnalyticCard(props: IProps) {
  return (
    <Wrapper $isGreen={props.isGreen}>
      <div className={"content"}>
        <div className={"cube"}>
          <div className={"image1"}>
            <Image src={props.boxIcon} alt="" height={17} width={17} />
          </div>

          <Image
            src={props.chartImg}
            alt=""
            height={40}
            width={85}
            className={"icon"}
          />
        </div>
        <div className={"number"}>
          <p className={"number1"}>{props.name}</p>
          <p className={"number2"}>{props.num}</p>
        </div>
        <div className={"arrow"}>
          <div className={"arrow1"}>
            <Image
              src={props.isGreen ? AppImages.arrow1 : AppImages.arrow2}
              alt=""
              height={17}
              width={17}
              className={"img"}
            />
            <p>{props.percent}</p>
          </div>
          <div className={"arrow2"}>
            <p>vs. previous month</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isGreen: boolean }>`
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
      color: ${(props) => (props.$isGreen ? "#34caa5" : "#ED544E")};
      background-color: ${(props) =>
        props.$isGreen
          ? "rgba(52, 202, 165, 0.12)"
          : "rgba(237, 84, 78, 0.12)"};
      /* background-color: #34caa51f; */
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
