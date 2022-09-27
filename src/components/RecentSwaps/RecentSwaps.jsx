import { useQuery } from "@apollo/client";
import React from "react";
import formatNumber from "../../utils/formatNumber";
import { RECENT_SWAPS } from "./queries";

export const RecentSwaps = ({ id }) => {
  const { loading, error, data } = useQuery(RECENT_SWAPS);

  console.log("data is ", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <table>
      {data.swaps.map((swap, i) => {
        return (
          <tr>
            <td>$ {formatNumber(formatNumber(parseInt(swap.amountUSD)))}</td>
            <td>{swap.pair.token0.symbol} </td>
            <td>-</td>
            <td>{swap.pair.token1.symbol} </td>
            <td>{swap.to} </td>
          </tr>
        );
      })}
    </table>
  );
};
