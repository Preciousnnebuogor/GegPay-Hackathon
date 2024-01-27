import styled from "styled-components";
import Image from "next/image";
import { AppImages } from "@/app/utils/AppImages";
export function Search() {
  return (
    <Wrapper>
      <Image src={AppImages.search} alt="" height={20} width={20} />
      <input type="text" placeholder="Search..." />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #dadddd;
  padding: 10px;
  border-radius: 25px;
  input {
    border: none;
    outline: none;
    margin-left: 5px;
  }
`;
