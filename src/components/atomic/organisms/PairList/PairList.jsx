import { Card } from 'components/atomic/atoms/Card/Card';
import { PairsContext } from 'context/PairsContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import formatNumber from 'utils/formatNumber';
import * as Styled from './styles';

export function PairList({ data }) {
  const { selectedPair } = useContext(PairsContext);
  return (
    <Styled.PoolGrid initial="hidden" animate="show">
      {data.pairs
          && data.pairs.map((pair) => (
            <Link to={`/pairs/${pair.id}`}>
              <Card
                className={pair.id === selectedPair}
                key={pair.id}
                transparent
              >
                <div className="medium-text">
                  {pair.token0.symbol}
                  {' '}
                  -
                  {pair.token1.symbol}
                </div>
                <div>
                  $
                  {formatNumber(parseInt(pair.volumeUSD, 2))}
                </div>
              </Card>
            </Link>
          ))}
    </Styled.PoolGrid>
  );
}
