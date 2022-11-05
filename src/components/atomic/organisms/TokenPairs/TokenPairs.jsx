import { Card } from 'components/atomic/atoms/Card/Card';
import React from 'react';
import { Link } from 'react-router-dom';
import formatNumber from 'utils/formatNumber';
import * as Styled from './styles';

export function TokenPairs({ data }) {
  return (
    <Styled.TokenPairs>
      {data.map((pair) => (
        <Link to={`/pairs/${pair.id}`}>
          <Card variant="gradient" key={pair.id}>
            <div className="medium-text">
              {pair.token0.symbol}
              {' '}
              -
              {pair.token1.symbol}
            </div>
            <div>
              $
              {formatNumber(parseInt(pair.volumeUSD, 10))}
            </div>
          </Card>
        </Link>
      ))}
    </Styled.TokenPairs>
  );
}
