import styled from "styled-components";
import { TopPlatformCard } from "./TopPlatformCard";

export function TopPlatform() {
  return (
    <Wrapper>
      <div className={"content"}>
        <p>Topplatform</p>
        <p style={{ color: "#34CAA5" }}>See all</p>
      </div>
      <TopPlatformCard
        title={"BookBazar"}
        price={"$2,500,000"}
        percent={"+15%"}
        colourBar={"#5e34ca"}
        colorBarWidth={80}
      />
      <TopPlatformCard
        title={"Artisan Aisle"}
        price={"$1,800,000"}
        percent={"+10%"}
        colourBar={"#54C5EB"}
        colorBarWidth={65}
      />
      <TopPlatformCard
        title={"Toy Troop"}
        price={"$1,200,000"}
        percent={"+8%"}
        colourBar={"#FFB74A"}
        colorBarWidth={45}
      />
      <TopPlatformCard
        title={"John Pit"}
        price={"$1,500,000"}
        percent={"+6%"}
        colourBar={"#2da62d"}
        colorBarWidth={35}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 40%;
  background-color: #ffffff;
  border-radius: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: 20px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 10px;
  }
`;
