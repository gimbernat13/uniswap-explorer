import { useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BarCharts } from 'components/atomic/organisms/BarCharts/BarCharts';
import { Card } from 'components/atomic/atoms/Card/Card';
import { Loader } from 'components/atomic/atoms/Loader/Loader';
import { RecentSwaps } from 'components/atomic/organisms/RecentSwaps/RecentSwaps';
import { darkTheme, SwapWidget } from '@uniswap/widgets';
import { ThemeContext } from 'styled-components';
import * as Styled from './styles';
import { PAIR_AGGREGATE } from './queries';
import formatNumber from '../../utils/formatNumber';

export function PairAggregate() {
  const { pairID } = useParams();

  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pairID]);

  const { theme } = useContext(ThemeContext);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair, swaps } = data;
  return (
    <>
      <Styled.AggregateGrid>
        <Styled.AggregateLeft>
          <Styled.PairSpecs>
            <Link to={`/tokens/${pair.token0.id}`}>
              <Card variant="gradient" height="100%">
                <div className="large-text">{pair.token0.symbol}</div>
                <div>
                  {formatNumber(parseFloat(pair.reserve0).toFixed(2))}
                  {' '}
                </div>
              </Card>
            </Link>
            <Link to={`/tokens/${pair.token1.id}`}>
              <Card variant="gradient" height="100%">
                <div className="large-text">{pair.token1.symbol}</div>
                <div>
                  {formatNumber(parseFloat(pair.reserve1).toFixed(2))}
                  {' '}
                </div>
              </Card>
            </Link>

            <Card height="100%">
              <Styled.InfoCard>
                <div className="bold">Volume: </div>
                <div>
                  $
                  {formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}
                </div>
                <div className="bold"> 24h V:</div>
                <div>
                  {formatNumber(
                    parseFloat(pairDayDatas[0].dailyVolumeToken0).toFixed(2),
                  )}
                </div>
                <div className="bold"> Reserve: </div>
                <div>
                  $
                  {formatNumber(parseFloat(pair.reserveUSD).toFixed(2))}
                </div>
              </Styled.InfoCard>
            </Card>
          </Styled.PairSpecs>
          <Card height="100%">
            <BarCharts
              yValue1={pairDayDatas.dailyVolumeToken0}
              yValue2={pairDayDatas.dailyVolumeToken1}
              chartData={pairDayDatas}
            />
          </Card>
        </Styled.AggregateLeft>
        <Styled.AggregateRight>
          <div>
            <SwapWidget
              defaultInputTokenAddress={pair.token0.id}
              defaultOutputTokenAddress={pair.token1.id}
              theme={theme === 'dark' ? darkTheme : darkTheme}
            />
          </div>
        </Styled.AggregateRight>
      </Styled.AggregateGrid>
      <br />
      <Card>
        <RecentSwaps pairData={pair} swapData={swaps} />
      </Card>
    </>
  );
}
