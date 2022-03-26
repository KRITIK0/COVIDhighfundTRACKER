import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

import { dataFormater } from "../../utils/common";

const index = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
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
  </ResponsiveContainer>
);

export default index;
