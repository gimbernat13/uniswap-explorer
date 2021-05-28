import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext, useState } from "react";

export default function Chart() {
  const TokensContext = useContext(TokenContext);
  const { tokenId } = TokensContext;
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenId },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;


  const reverseData = [...data.tokenDayDatas].reverse()

    return (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={reverseData}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
            </linearGradient>
          </defs>
  
          <Area dataKey="priceUSD" stroke="#2c88ff" fill="url(#color)" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false} 
          />
          <YAxis
            datakey="priceUSD"
            axisLine={false}
            tickLine={false}
            tickCount={8}
          />
  
          <Tooltip />
  
          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    );

}

