import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  // CartesianGrid,
} from "recharts";

export const BarCharts = ({ chartData, yKey, yValue1, yValue2, xKey }) => {
  // FIXME: Extract to utils
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  console.log("chart data ", chartData);

  chartData.map((item) => {
    console.log(item.dailyVolumeUSD);
  });
  return (
    <>
      <BarChart width={730} height={250} data={chartData}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey={getTimeAxis} />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey={"dailyVolumeToken0"} fill="#8884d8" />
        <Bar dataKey={"dailyVolumeToken1"} fill="#82ca9d" />
      </BarChart>
    </>
  );
};
