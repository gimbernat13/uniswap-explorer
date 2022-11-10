import React from 'react';
import formatNumber from '../../../../utils/formatNumber';
import { Card } from '../../atoms/Card/Card';
import * as Styled from './styles';

export function TokenDetails({ tokenData, tokenDayDatas }) {
  const {
    tradeVolumeUSD,
    txCount: tokenTxCount,
    totalLiquidity,
  } = tokenData;
  const { totalLiquidityUSD, dailyVolumeUSD, dailyTxns } = tokenDayDatas;

  return (
    <Styled.DetailsGrid>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Total Volume</div>
          <div className="bold">
            $
            {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Liquidity </div>
          <div className="bold">
            {formatNumber(parseFloat(totalLiquidity).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Total TXs:</div>
          <div className="bold">{formatNumber(parseFloat(tokenTxCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Daily Volume </div>
          <div className="bold">
            $
            {formatNumber(parseFloat(dailyVolumeUSD).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Liquidity 24h</div>
          <div className="bold">{formatNumber(parseFloat(totalLiquidityUSD).toFixed(2))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card variant="noShadow" height="100%">
          <div>Txs 24h</div>
          <div className="bold">{formatNumber(parseFloat(dailyTxns))}</div>
        </Card>
      </Styled.DetailsGridItem>
    </Styled.DetailsGrid>
  );
}
