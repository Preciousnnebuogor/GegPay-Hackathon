import styled from "styled-components";
import { LastOrder } from "./LastOrder";
import { TopPlatform } from "./TopPlatform";

export function BottonSection() {
  return (
    <Wrapper>
      <LastOrder />
      <TopPlatform />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 400px;
  background-color: brown;
`;
