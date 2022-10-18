import React from "react";
import formatNumber from "../../../../utils/formatNumber";
import { Card } from "../../atoms/Card/Card";
import * as Styled from "./styles";

export const TokenDetails = ({ tokenData, tokenDayDatas }) => {
  const { name, symbol, id, tradeVolumeUSD, derivedETH, txCount } = tokenData;
  const { totalLiquidityUSD, dailyVolumeUSD } = tokenDayDatas;

  return (
    <Styled.DetailsGrid>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> Total Volume</div>
          <div>${formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> Liquidity</div>
          <div>${formatNumber(parseFloat(totalLiquidityUSD).toFixed(2))} </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> TX's:</div>
          <div>{formatNumber(parseFloat(txCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> Daily Volume </div>
          <div>${formatNumber(parseFloat(dailyVolumeUSD).toFixed(2))} </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> TX's:</div>
          <div>{formatNumber(parseFloat(txCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card transparent height="100%">
          <div className="medium-text"> TX's:</div>
          <div>{formatNumber(parseFloat(txCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
    </Styled.DetailsGrid>
  );
};
