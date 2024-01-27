import styled from "styled-components";

export const LastOrderWrapper = styled.div`
  width: 60%;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.background2};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  .topRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
    margin-top: 10px;
  }
  .table {
    text-align: start;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 10px;

    thead th {
      color: ${(props) => props.theme.colors.text1};
      font-weight: 100;
      border-bottom: 1px solid #ebecf2;
      text-align: start;
    }

    tr {
      border-bottom: 1px solid #ebecf2;
      padding: 10px 0;
      height: 40px;
      font-size: small;
      color: ${(props) => props.theme.colors.text2};
    }

    .icon {
      float: left;
      margin-right: 10px;
    }
    .para {
      margin-right: 10px;
    }
  }
`;
