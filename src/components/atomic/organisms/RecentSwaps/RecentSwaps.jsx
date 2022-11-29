import React from "react";
import formatNumber from "utils/formatNumber";
import * as Styled from "./styles";
export const RecentSwaps = ({ swapData, pairData }) => {
  const { token0, token1 } = pairData;


  return (
    <Styled.TxTable className="styled-table" initial="hidden" animate="show">
      <tbody>
        {swapData.map((swap) => {

          console.log("swap data" , swapData)
          console.log("swap " , swap.id)
          return (
            <Styled.TxRow key={swap.id}>
              <td>$ {formatNumber(parseInt(swap.amountUSD))}</td>
              <td>{token0.symbol} </td>
              <td>{token1.symbol} </td>
              <td>{swap.id}</td>
           
            </Styled.TxRow>
          );
        })}
      </tbody>
    </Styled.TxTable>  
  );
};
