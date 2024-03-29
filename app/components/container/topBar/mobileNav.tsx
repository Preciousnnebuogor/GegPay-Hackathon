import { AppImages } from "@/app/utils";
import React, { useContext } from "react";
import styled from "styled-components";
import { ImageComps } from "../../sidebar/image";
import { AppThemeContext } from "@/app/providers/styles";

export default function MobileNav(props: { onClick: VoidFunction }) {
  const context = useContext(AppThemeContext);
  return (
    <Wrapper>
      <div className={"content"}>
        <ImageComps onClick={props.onClick} path={AppImages.logoIcon} />
        <ImageComps onClick={props.onClick} path={AppImages.dashboardIcon} />
        <ImageComps onClick={props.onClick} path={AppImages.thirdIcon} />
        <ImageComps onClick={props.onClick} path={AppImages.icon4} />
        <ImageComps onClick={props.onClick} path={AppImages.icon5} />
        <ImageComps onClick={props.onClick} path={AppImages.icon6} />
        <ImageComps onClick={props.onClick} path={AppImages.icon7} />
        <ImageComps onClick={props.onClick} path={AppImages.icon8} />
        <ImageComps
          onClick={() => {
            props.onClick;
            context.fn;
          }}
          path={AppImages.icon9}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 5;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text2};
  .content {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.background2};
      padding: 20px 0;
      border-radius: 10px;
    }
  }
`;
