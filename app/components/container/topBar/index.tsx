import { AppImages } from "@/app/utils/AppImages";
import Image from "next/image";
import styled from "styled-components";
import { Search } from "./search";
import { BiMenu } from "react-icons/bi";
export function TopBarComp() {
  return (
    <Wrapper>
      <div className="menu">
        <BiMenu className="icon" />
        <h2>Dashboard</h2>
      </div>
      <Search />
      <div className={"section"}>
        <div className={"date"}>
          <Image
            src={AppImages.date}
            alt=""
            height={20}
            width={20}
            className={"svg"}
          />
          <p>November 15, 2023</p>
        </div>
        <div className={"notify"}>
          <Image
            src={AppImages.notification}
            alt=""
            height={20}
            width={20}
            className={"icon"}
          />
        </div>
        <div className={"profile"}>
          <Image
            src={AppImages.profile}
            alt=""
            height={30}
            width={30}
            className={"profileImg "}
          />
          <div className={"name"}>
            <p>Justin Bergson</p>
            <p>justin@gmail.com</p>
          </div>
          <Image
            src={AppImages.arrow}
            alt=""
            height={17}
            width={17}
            className={"icon"}
          />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #ebecf2;
  padding: 10px 20px;
  color: ${(props) => props.theme.colors.text1};
  @media ${(props) => props.theme.breakpoints.sm} {
    /* display: none; */
    padding: 5px 10px;
    height: 50px;
  }
  .menu {
    display: flex;
    align-items: center;
    h2{
      font-size: 13px;
    }
    .icon {
      display: none;
      font-size: larger;
      font-weight: bold;
      color: ${(props) => props.theme.colors.primary};
      margin-right: 10px;
      @media ${(props) => props.theme.breakpoints.sm} {
        display: block;
      }
    }
  }
  .section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    @media ${(props) => props.theme.breakpoints.sm} {
      display: none;
    }
    .date {
      display: flex;
      align-items: center;
      justify-content: center;
      .svg {
        margin-right: 10px;
      }
    }
    .notify {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      border: solid 1px #dadddd;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
    }
    .profile {
      margin-left: 10px;
      border-radius: 25px;
      border: solid 1px #dadddd;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
     
      .profileImg {
        margin-right: 10px;
      }
      .name {
        font-size: 10px;
        margin-right: 10px;
      }
      .icon {
        margin-right: 10px;
      }
    }
  }
`;
