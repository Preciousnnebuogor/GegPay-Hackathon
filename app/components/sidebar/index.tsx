import { AppImages } from "@/app/utils/AppImages";
import Image from "next/image";
import styled from "styled-components";
import { ImageComps } from "./image";
import { useContext } from "react";
import { AppThemeContext } from "@/app/providers/styles";

export function SideBar() {
  const context = useContext(AppThemeContext);
  return (
    <Wrapper>
      <div className={"topSection"}>
        <ImageComps path={AppImages.logoIcon} />
        <ImageComps path={AppImages.dashboardIcon} />
        <ImageComps path={AppImages.thirdIcon} />
        <ImageComps path={AppImages.icon4} />
        <ImageComps path={AppImages.icon5} />
        <ImageComps path={AppImages.icon6} />
        <ImageComps path={AppImages.icon7} />
        <ImageComps path={AppImages.icon8} />
        <ImageComps onClick={context.fn} path={AppImages.icon9} />
      </div>
      <div className={"bottomSection"}>
        <ImageComps path={AppImages.icon4} />
        <ImageComps path={AppImages.icon5} />
        <ImageComps path={AppImages.icon6} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  height: 100vh;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-right: 2px solid #ebecf2;
  overflow-y: hidden;
  scroll-behavior: none;
  position: fixed;
  top: 0;
  left: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  .topSection {
    gap: 10px;
  }
`;
