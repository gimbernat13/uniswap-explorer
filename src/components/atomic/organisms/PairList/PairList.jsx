import { Card } from 'components/atomic/atoms/Card/Card';
import { setSelectedPair } from 'context/actionNames';
import { PairsContext } from 'context/PairsContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import formatNumber from 'utils/formatNumber';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export function PairList({ data }) {
  const { selectedPair, dispatch: pairDispatch } = useContext(PairsContext);
  const location = useLocation();
  const tokenIdFromUrl = location.pathname.split("/").pop();

  return (
    <Styled.PoolGrid initial="hidden" animate="show">
      {data.pairs
        && data.pairs.map((pair) => {
          const isActive = pair.id === tokenIdFromUrl;
          return (
            <Link onClick={() => pairDispatch({ type: setSelectedPair, payload: pair.id })} to={`/pairs/${pair.id}`}>
              <Card
                variant={isActive ? "cool" : "gradient"}
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
                  {formatNumber(parseInt(Number(pair.volumeUSD, 2)))}
                </div>
              </Card>
            </Link>
          )
        }

        )}
    </Styled.PoolGrid>
  );
}
