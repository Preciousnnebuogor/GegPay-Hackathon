import styled from "styled-components";
import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
export function SalesTrendChart() {
  const data = [
    { name: "jan", value: 5.5 },
    { name: "feb", value: 9.8 },
    { name: "mar", value: 4.5 },
    { name: "apr", value: 29.8 },
    { name: "may", value: 10 },
    { name: "jun", value: 40 },
    { name: "jul", value: 9.8 },
    { name: "aug", value: 19.8 },
    { name: "sep", value: 40.5 },
    { name: "oct", value: 4.8 },
    { name: "nov", value: 30 },
    { name: "dec", value: 25 },
  ];
  return (
    <Wrapper>
      <BarChart width={600} height={600} data={data}>
        <Bar dataKey="value" fill="#34CAA51A" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
