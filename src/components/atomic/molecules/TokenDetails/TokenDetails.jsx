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
        <Card height="100%">
          <div className="medium-text">Total Volume</div>
          <div>
            $
            {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card height="100%">
          <div className="medium-text">Total Liquidity </div>
          <div>
            ETH
            {formatNumber(parseFloat(totalLiquidity).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card height="100%">
          <div className="medium-text">Total TX`&apos;`s:</div>
          <div>{formatNumber(parseFloat(tokenTxCount))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card height="100%">
          <div className="medium-text">Daily Volume </div>
          <div>
            $
            {formatNumber(parseFloat(dailyVolumeUSD).toFixed(2))}
          </div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card height="100%">
          <div className="medium-text">Daily Liquidity</div>
          <div>{formatNumber(parseFloat(totalLiquidityUSD).toFixed(2))}</div>
        </Card>
      </Styled.DetailsGridItem>
      <Styled.DetailsGridItem>
        <Card height="100%">
          <div className="medium-text">Tx's 24 Hours</div>
          <div>{formatNumber(parseFloat(dailyTxns))}</div>
        </Card>
      </Styled.DetailsGridItem>
    </Styled.DetailsGrid>
  );
}
