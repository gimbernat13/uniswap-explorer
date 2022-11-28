import { Card } from 'components/atomic/atoms/Card/Card';
import { setSelectedPair } from 'context/actionNames';
import { PairsContext } from 'context/PairsContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import formatNumber from 'utils/formatNumber';
import * as Styled from './styles';

export function PairList({ data }) {
  const { selectedPair, dispatch: pairDispatch } = useContext(PairsContext);
  return (
    <Styled.PoolGrid initial="hidden" animate="show">
      {data.pairs
          && data.pairs.map((pair) => (
            <Link onClick={() => pairDispatch({ type: setSelectedPair, payload: pair.id })} to={`/pairs/${pair.id}`}>
              <Card
                variant="gradient"
                className={pair.id === selectedPair && 'active'}
                key={pair.id}
              >
                {selectedPair}
                <div className="medium-text">
                  {pair.token0.symbol}
                  -
                  {pair.token1.symbol}
                </div>
                <div>
                  $
             {formatNumber(parseFloat(pair.volumeUSD).toFixed(2))} 

                </div>
              </Card>
            </Link>
          ))}
    </Styled.PoolGrid>
  );
}
