import styled from "styled-components";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useScreenSize } from "@/app/utils";

export function SalesTrendChart() {
  const screen = useScreenSize();
  const data = [
    { name: "Jan", value: 50 },
    { name: "Feb", value: 38 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 29.8 },
    { name: "May", value: 10 },
    { name: "Jun", value: 40 },
    { name: "Jul", value: 38 },
    { name: "Aug", value: 19 },
    { name: "Sep", value: 40 },
    { name: "Oct", value: 48 },
    { name: "Nov", value: 30 },
    { name: "Dec", value: 15 },
  ];
  return (
    <Wrapper>
      <ResponsiveContainer height={screen.height / 3} width={"100%"}>
        <BarChart data={data}>
          <Bar dataKey="value" fill="#34caa49a" />
          <CartesianGrid stroke="#edf2e8" vertical={false} />
          <XAxis dataKey="name" />
          {screen.width > 600 && <YAxis />}
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* max-height: 200px; */
  background-color: #fff;
  height: 100%;
`;
