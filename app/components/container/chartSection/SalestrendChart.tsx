import styled from "styled-components";
import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
export function SalesTrendChart() {
  const data = [
    { name: "jan", value: 50 },
    { name: "feb", value: 38 },
    { name: "mar", value: 45 },
    { name: "apr", value: 29.8 },
    { name: "may", value: 10 },
    { name: "jun", value: 40 },
    { name: "jul", value: 38 },
    { name: "aug", value: 19 },
    { name: "sep", value: 40 },
    { name: "oct", value: 48 },
    { name: "nov", value: 30 },
    { name: "dec", value: 15 },
  ];
  return (
    <Wrapper>
      <BarChart width={700} height={200} data={data}>
        <Bar dataKey="value" fill="#34caa49a" />
        <CartesianGrid stroke="#edf2e8" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis  />
      </BarChart>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
