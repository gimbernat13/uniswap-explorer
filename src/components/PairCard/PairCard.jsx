import React from "react";
import formatNumber from "../../utils/formatNumber";
import { BorderedCard } from "../BorderedCard/BorderedCard";
import * as Styled from "./styles";

export const PairCard = ({ pair }) => {
  const animatedItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <BorderedCard variants={animatedItem}>
      <Styled.PoolCard key={pair.id}>
        <Styled.PoolCardInner>
          <div style={{ fontWeight: "bold", color: "white" }}>
            {pair.token0.symbol} - {pair.token1.symbol}
          </div>
          <div>TX Count: {pair.txCount}</div>
          <div>Daily Volume : ${formatNumber(parseInt(pair.volumeUSD))}</div>
        </Styled.PoolCardInner>
      </Styled.PoolCard>
    </BorderedCard>
  );
};
