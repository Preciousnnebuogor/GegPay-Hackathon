import styled from "styled-components";
import { LastOrder } from "./LastOrder";
import { TopPlatform } from "./TopPlatform";

export function BottonSection() {
  return (
    <Wrapper>
      <LastOrder />
      <div className="spacer" />
      <TopPlatform />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* background-color: burlywood; */
  margin-top: 20px;
  /* min-height: 400px; */
 
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
  .spacer {
    width: 15px;
  }
`;
