import Image from "next/image";

export function ImageComps(props: { path: string }) {
  return <Image src={props.path} height={40} width={40} alt="dash" />;
}
