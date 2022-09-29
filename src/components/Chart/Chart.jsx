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
  // const reverseData = [...data.tokenDayDatas].reverse();

  // For time charts
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  const stringToInt = (data) => {
    const dailyTxns = parseInt(data.dailyTxns);

    return dailyTxns;
  };

  console.log("chart da", chartData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          domain={"auto"}
          dataKey={yKey}
          stroke="#2c88ff"
          fill="url(#color)"
        />
        {/* <Area
          domain={"auto"}
          dataKey={yKey1}
          stroke="#2cff80"
          fill="url(#color)"
        /> */}
        <XAxis
          scale={"band"}
          dataKey={getTimeAxis}
          axisLine={true}
          tickLine={true}
          tickCount={15}
        />
        <YAxis />

        <YAxis
          scale={"band"}
          datakey={stringToInt}
          type="number"
          domain={["auto", "auto"]}
          allowDataOverflow
        />

        <Tooltip />

        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
