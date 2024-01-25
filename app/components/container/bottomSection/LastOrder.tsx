import styled from "styled-components";
import Image from "next/image";
import { AppImages } from "@/app/utils/AppImages";
export function LastOrder() {
  return (
    <Wrapper>
      <div className={"topRow"}>
        <p>Last Orders</p>
        <p style={{ color: "#34CAA5" }}>See All</p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tr>
          <Image
            src={AppImages.pic1}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>Marcus Bergson</p>
          <td>Nov 15,2023</td>
          <td>$80,000</td>
          <td style ={{color:"#34CAA5"}}>paid</td>
          <Image
            src={AppImages.viewAll}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>View</p>
        </tr>

        <tr>
          <Image
            src={AppImages.pic2}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>Jaydon Vaccaro</p>
          <td>Nov 15,2023</td>
          <td>$150,000</td>
          <td style={{ color: "red" }}>Refund</td>
          <Image
            src={AppImages.viewAll}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>View</p>
        </tr>

        <tr className={"section"}>
          <Image
            src={AppImages.pic3}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>Corey Schiefer</p>
          <td>Nov 14,2023</td>
          <td>$87,000</td>
          <td style ={{color:"#34CAA5"}}>Paid</td>
          <Image
            src={AppImages.viewAll}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>View</p>
        </tr>

        <tr className={"section"}>
          <Image
            src={AppImages.pic4}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>Cooper Press</p>
          <td>Nov 14,2023</td>
          <td>$100,000</td>
          <td style={{ color: "red" }}>Refund</td>
          <Image
            src={AppImages.viewAll}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>View</p>
        </tr>

        <tr className={"section"}>
          <Image
            src={AppImages.pic5}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>Phillip Lubin</p>
          <td>Nov 13,2023</td>
          <td>$78,000</td>
          <td style ={{color:"#34CAA5"}}>Paid</td>
          <Image
            src={AppImages.viewAll}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
          <p className={"para"}>View</p>
        </tr>
      </table>
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
    margin-top:10px;
  }
  .table {
    text-align: start;
    width: 100%;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 10px;

    thead th {
      color: #9CA4AB;
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
