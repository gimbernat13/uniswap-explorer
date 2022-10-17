import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { RecentSwaps } from "../../components/RecentSwaps/RecentSwaps";
import formatNumber from "../../utils/formatNumber";
import { PAIR_AGGREGATE } from "./queries";
import * as Styled from "./styles";
import { Loader } from "../../components/Loader/Loader";
import { BarCharts } from "../../components/atomic/organisms/BarCharts/BarCharts";
export const PairAggregate = () => {
  const { pairID } = useParams();

  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pairID]);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair } = data;
  console.log("pair da", pairDayDatas);
  return (
    <Styled.AggregateGrid>
      <Styled.AggregateLeft>
        <Styled.PairSpecs>
          <Link to={`/tokens/${pair.token0.id}`}>
            <Card height="100%">
              <div className="large-text">{pair.token0.symbol}</div>
              <div>{formatNumber(parseFloat(pair.reserve0).toFixed(2))} </div>
            </Card>
          </Link>
          <Link to={`/tokens/${pair.token1.id}`}>
            <Card height="100%">
              <div className="large-text">{pair.token1.symbol}</div>
              <div>{formatNumber(parseFloat(pair.reserve1).toFixed(2))} </div>
            </Card>
          </Link>

          <Card height="100%">
            <Styled.InfoCard>
              <div className="bold">Volume: </div>
              <div>${formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}</div>
              <div className="bold"> 24h V:</div>
              <div>
                {formatNumber(
                  parseFloat(pairDayDatas[0].dailyVolumeToken0).toFixed(2)
                )}
              </div>
              <div className="bold"> Reserve: </div>
              <div>${formatNumber(parseFloat(pair.reserveUSD).toFixed(2))}</div>
            </Styled.InfoCard>
          </Card>
        </Styled.PairSpecs>
        <Card height="100%">
          <FlexContainer>
            {/* <Button onClick={() => setSelectedFilter("dailyTxns")}>
            Daily Transactions
          </Button> */}
          </FlexContainer>
          <BarCharts
            yValue1={pairDayDatas.dailyVolumeToken0}
            yValue2={pairDayDatas.dailyVolumeToken1}
            chartData={pairDayDatas}
          />
        </Card>
      </Styled.AggregateLeft>

      <Card height="100%">
        <div className="medium-text">Recent Swaps</div>
        <RecentSwaps id={pair.id} />
      </Card>
    </Styled.AggregateGrid>
  );
};
