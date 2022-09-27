import React from "react";
import formatNumber from "../../utils/formatNumber";
import * as Styled from "./styles";

export const PairCard = ({ pair }) => {
  const animatedItem = {
    hidden: { y: 25, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <Styled.PoolCard variants={animatedItem} key={pair.id}>
      <Styled.PoolCardInner>
        <h3>
          {pair.token0.symbol} - {pair.token1.symbol}{" "}
        </h3>
        <div>TX Count: {pair.txCount}</div>
        <div>Daily Volume : ${formatNumber(parseInt(pair.volumeUSD))}</div>
      </Styled.PoolCardInner>
    </Styled.PoolCard>
  );
};
