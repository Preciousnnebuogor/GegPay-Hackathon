import styled from "styled-components";

interface IProps {
  title: string;
  price: string;
  percent: string;
  colourBar: string;
  colorBarWidth: number;
}
export function TopPlatformCard(props: IProps) {
  const blankWidth = 100 - props.colorBarWidth;
  return (
    <Wrapper
      $colorBar={props.colourBar}
      $colouredWidth={props.colorBarWidth.toString().concat("%")}
      $blankWidth={blankWidth.toString().concat("%")}
    >
      <div className="row_title">
        <p>{props.title}</p>
      </div>
      <div className={"row"}>
        <div className={"colouredBar"}></div>
        <div className={"blank"}></div>
      </div>
      <div className={"number"}>
        <p>{props.price}</p>
        <p>{props.percent}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div<{
  $colorBar: string;
  $colouredWidth: string;
  $blankWidth: string;
}>`
  padding: 5px 10px;
  font-size: small;
  .row_title {
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.text1};
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .colouredBar {
      background-color: ${(props) => props.$colorBar};
      height: 12px;
      width: ${(props) => props.$colouredWidth};
      border-radius: 10px;
      padding: 5px;
    }
    .blank {
      background-color: #f5f5f5;
      height: 12px;
      width: ${(props) => props.$blankWidth};
      border-radius: 0 10px 10px 0;
      padding: 5px;
    }
  }
  .number {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text2};
  }
`;
