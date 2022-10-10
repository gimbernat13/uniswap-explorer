import { useQuery } from "@apollo/client";
import React from "react";
import formatNumber from "../../utils/formatNumber";
import { Loader } from "../Loader/Loader";
import { RECENT_SWAPS } from "./queries";
import * as Styled from "./styles";
export const RecentSwaps = ({ id }) => {
  const { loading, error, data } = useQuery(RECENT_SWAPS, {
    variables: { id: id },
  });

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };
  const animatedItem = {
    hidden: { y: 0, opacity: 0 },
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
              <td>{swap.pair.token1.symbol} </td>
              <td>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Eth
                  {/* <img
                    style={{ height: "20px" }}
                    src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.2"
                    alt=""
                  /> */}
                </a>
              </td>
            </Styled.TxRow>
          );
        })}
      </tbody>
    </Styled.TxTable>
  );
};
