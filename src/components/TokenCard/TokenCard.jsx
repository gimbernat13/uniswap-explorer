import React from "react";

import formatNumber from "../../utils/formatNumber";
import { BorderedCard } from "../BorderedCard/BorderedCard";
import * as Styled from "./styles";
const animatedItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const TokenCard = ({ token, index }) => {
  return (
    <BorderedCard>
      <Styled.TokenCard variant={animatedItem} className="card">
        <div className="symbol bold large">{index}</div>
        <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
        <div className="symbol">
          {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))} USD{" "}
        </div>
      </Styled.TokenCard>
    </BorderedCard>
  );
};
