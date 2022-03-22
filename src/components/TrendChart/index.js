import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

import { dataFormater } from "./utils";

const index = ({ data, width }) => (
  <LineChart
    width={width - 100}
    height={450}
    data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis tickFormatter={(value) => dataFormater(value, false)} />
    <Tooltip formatter={(value) => dataFormater(value, true)} />
    <Legend />
    <Line type="monotone" dataKey="cases" stroke="#FFD93D" />
    <Line type="monotone" dataKey="deaths" stroke="#FF6B6B" />
    <Line type="monotone" dataKey="recovered" stroke="#6BCB77" />
  </LineChart>
);

export default index;
