import { Card } from 'components/atomic/atoms/Card/Card';
import React, { useContext } from 'react';
import { TokensContext } from 'context/TokensContext';
import formatNumber from 'utils/formatNumber';
import * as Styled from './styles';

export function TokenCard({ token, index }) {
  const { state: tokensState } = useContext(TokensContext);
  return (
    <Card variant="gradient" isActive={tokensState.selectedToken === token.id}>
      <Styled.TokenCard className="card">
        {/* <div className="symbol bold large">{index}</div> */}
        <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
        <div className="symbol">
          $
          {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))}
        </div>
      </Styled.TokenCard>
    </Card>
  );
}
