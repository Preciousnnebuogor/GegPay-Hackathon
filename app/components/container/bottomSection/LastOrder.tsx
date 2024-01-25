import Image from "next/image";
import { AppImages } from "@/app/utils/AppImages";
import { LastOrderWrapper } from "./lastOrderWrapper";

export function LastOrder() {
  return (
    <LastOrderWrapper>
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
          <td>
            <Image
              src={AppImages.pic1}
              alt=""
              height={17}
              width={17}
              className={"icon"}
            />
            <p className={"para"}>Marcus Bergson</p>
          </td>
          <td>Nov 15,2023</td>
          <td>$80,000</td>
          <td style={{ color: "#34CAA5" }}>paid</td>
          <td>
            <Image
              src={AppImages.viewAll}
              alt=""
              height={15}
              width={15}
              className={"icon"}
            />
            <p className={"para"}>View</p>
          </td>
        </tr>

        <tr>
          <td>
            <Image
              src={AppImages.pic2}
              alt=""
              height={17}
              width={17}
              className={"icon"}
            />
            <p className={"para"}>Jaydon Vaccaro</p>
          </td>
          <td>Nov 15,2023</td>
          <td>$150,000</td>
          <td style={{ color: "red" }}>Refund</td>
          <td>
            <Image
              src={AppImages.viewAll}
              alt=""
              height={15}
              width={15}
              className={"icon"}
            />
            <p className={"para"}>View</p>
          </td>
        </tr>

        <tr className={"section"}>
          <td>
            <Image
              src={AppImages.pic3}
              alt=""
              height={17}
              width={17}
              className={"icon"}
            />
            <p className={"para"}>Corey Schiefer</p>
          </td>
          <td>Nov 14,2023</td>
          <td>$87,000</td>
          <td style={{ color: "#34CAA5" }}>Paid</td>
          <td>
            <Image
              src={AppImages.viewAll}
              alt=""
              height={15}
              width={15}
              className={"icon"}
            />
            <p className={"para"}>View</p>
          </td>
        </tr>

        <tr className={"section"}>
          <td>
            <Image
              src={AppImages.pic4}
              alt=""
              height={17}
              width={17}
              className={"icon"}
            />
            <p className={"para"}>Cooper Press</p>
          </td>
          <td>Nov 14,2023</td>
          <td>$100,000</td>
          <td style={{ color: "red" }}>Refund</td>
          <td>
            <Image
              src={AppImages.viewAll}
              alt=""
              height={15}
              width={15}
              className={"icon"}
            />
            <p className={"para"}>View</p>
          </td>
        </tr>

        <tr className={"section"}>
          <td>
            <Image
              src={AppImages.pic5}
              alt=""
              height={17}
              width={17}
              className={"icon"}
            />
            <p className={"para"}>Phillip Lubin</p>
          </td>
          <td>Nov 13,2023</td>
          <td>$78,000</td>
          <td style={{ color: "#34CAA5" }}>Paid</td>
          <td>
            <Image
              src={AppImages.viewAll}
              alt=""
              height={15}
              width={15}
              className={"icon"}
            />
            <p className={"para"}>View</p>
          </td>
        </tr>
      </table>
    </LastOrderWrapper>
  );
}
