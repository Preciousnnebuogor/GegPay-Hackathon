import Image from "next/image";
import styled from "styled-components";

export function ImageComps(props: { path: string; onClick?: VoidFunction }) {
  return (
    <Container onClick={props.onClick}>
      <Image src={props.path} height={40} width={40} alt="dash" />{" "}
    </Container>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    border-radius: 20px;
    svg {
      color: white;
    }
    img {
      color: white;
    }
  }
`;
