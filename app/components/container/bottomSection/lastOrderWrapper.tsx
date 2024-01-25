import styled from "styled-components";

export const LastOrderWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
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
      color: #9ca4ab;
      font-weight: 100;
      border-bottom: 1px solid #ebecf2;
      text-align: start;
    }

    tr {
      border-bottom: 1px solid #ebecf2;
      padding: 10px 0;
      height: 40px;
      font-size: small;
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