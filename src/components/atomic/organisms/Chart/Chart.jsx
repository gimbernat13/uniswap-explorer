import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import React from "react";

export default function Chart({ chartData, xKey, yKey, yKey1 }) {
  //  FIXME: create dynamic reverser for token or pair day datas
  // const reverseData = [...chartData.reverse()];

  // For time charts
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey={yKey} stroke="#96a0f7" fill="url(#color)" />
        <XAxis dataKey={getTimeAxis} axisLine={true} tickLine={false} />
        <YAxis
          type="number"
          domain={["auto", "auto"]}
          datakey={yKey}
          axisLine={false}
          tickLine={false}
          tickCount={100}
        />
        <Tooltip />
        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
