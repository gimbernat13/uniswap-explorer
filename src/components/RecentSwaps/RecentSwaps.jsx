import { useQuery } from "@apollo/client";
import React from "react";
import formatNumber from "../../utils/formatNumber";
import { RECENT_SWAPS } from "./queries";
import * as Styled from "./styles";

export const RecentSwaps = ({ id }) => {
  const { loading, error, data } = useQuery(RECENT_SWAPS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const animatedItem = {
    hidden: { y: 25, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <Styled.TxTable variants={container} initial="hidden" animate="show">
      <tbody>
        {data.swaps.map((swap, i) => {
          return (
            <Styled.TxRow key={i} variants={animatedItem}>
              <td>$ {formatNumber(formatNumber(parseInt(swap.amountUSD)))}</td>
              <td>{swap.pair.token0.symbol} </td>
              <td>-</td>
              <td>{swap.pair.token1.symbol} </td>
              <td>{swap.to} </td>
            </Styled.TxRow>
          );
        })}
      </tbody>
    </Styled.TxTable>
  );
};
