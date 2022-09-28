import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext } from "react";

export default function Chart({ chartData }) {
  //  FIXME: create dynamic reverser for token or pair day datas
  // const reverseData = [...data.tokenDayDatas].reverse();

  const getXValue1 = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  // FIXME: ADD CONDITIONAL IF ITS DATE THEN FORMAT TO ISO

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area dataKey="priceUSD" stroke="#2c88ff" fill="url(#color)" />
        <XAxis
          scale={"band"}
          dataKey={getXValue1}
          axisLine={true}
          tickLine={true}
          tickCount={15}
        />
        <YAxis />

        <YAxis
          scale={"band"}
          type="number"
          datakey="priceUSD"
          domain={["dataMin", "auto"]}
          tickCount={15}
          allowDataOverflow={true}
        />

        <Tooltip />

        {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
}
