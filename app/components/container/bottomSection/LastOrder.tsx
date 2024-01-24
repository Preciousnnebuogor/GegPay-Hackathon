import styled from "styled-components";

export function LastOrder() {
  return (
    <Wrapper>
      <div className={"topRow"}>
        <p>Last Order</p>
        <p>see all</p>
      </div>
      <div className="table">

      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10%;
  background-color: #ffffff;
.topRow{
  display:flex;
  justify-content: space-between;
}
`;
