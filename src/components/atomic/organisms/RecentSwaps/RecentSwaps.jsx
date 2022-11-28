import React from "react";
import formatNumber from "utils/formatNumber";
import * as Styled from "./styles";
export const RecentSwaps = ({ swapData, pairData }) => {
  const { token0, token1 } = pairData;

  return (
    <Styled.TxTable className="styled-table" initial="hidden" animate="show">
      <tbody>
        {swapData.map((swap, i) => {
          return (
            <Styled.TxRow key={i}>
              <td>$ {formatNumber(parseInt(swap.amountUSD))}</td>
              <td>{token0.symbol} </td>
              <td>{token1.symbol} </td>
              <td>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <img
                    style={{ height: "20px" }}
                    src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg?v=0.0.2"
                    alt=""
                  />
                </a>
              </td>
            </Styled.TxRow>
          );
        })}
      </tbody>
    </Styled.TxTable>
  );
};
