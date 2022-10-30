import React from "react";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../../atoms/Card/Card";
import * as Styled from "./styles";

export const TokenDetails = ({ tokenData, tokenDayDatas }) => {
  const {
    name,
    symbol,
    id,
    tradeVolumeUSD,
    derivedETH,
    txCount: tokenTxCount,
    totalLiquidity,
  } = tokenData;
  const { totalLiquidityUSD, dailyVolumeUSD, dailyTxns } = tokenDayDatas;

  return (
    <Styled.DetailsGrid>
      <Styled.DetailsGridItem>
        <Card variant="primary" height="100%">
          <div className="medium-text">Total Volume</div>
          <div>${formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="primary" height="100%">
          <div className="medium-text">Total Liquidity </div>
          <div>ETH {formatNumber(parseFloat(totalLiquidity).toFixed(2))} </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="primary" height="100%">
          <div className="medium-text">Total TX's:</div>
          <div>{formatNumber(parseFloat(tokenTxCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
      {/* <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text">Daily Volume </div>
          <div>${formatNumber(parseFloat(dailyVolumeUSD).toFixed(2))} </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text">Daily Liquidity</div>
          <div>{formatNumber(parseFloat(totalLiquidityUSD).toFixed(2))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text">Tx's 24 Hours</div>
          <div>{formatNumber(parseFloat(dailyTxns))}</div>
        </Card>
      </Styled.DetailsGridItem> */}
    </Styled.DetailsGrid>
  );
};
