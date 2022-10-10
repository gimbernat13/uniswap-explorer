import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { BarCharts } from "../../components/BarCharts/BarCharts";
import { Button } from "../../components/Button/styles";
import { Card } from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { RecentSwaps } from "../../components/RecentSwaps/RecentSwaps";
import formatNumber from "../../utils/formatNumber";
import { PAIR_AGGREGATE } from "./queries";
import * as Styled from "./styles";
import { BarLoader } from "react-spinners";

export const PairAggregate = () => {
  const { pairID } = useParams();

  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pairID]);

  if (loading) return <BarLoader color="#36d7b7" />;
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair } = data;
  console.log("pair da", pairDayDatas);
  return (
    <Styled.AggregateGrid>
      <Styled.AggregateLeft>
        <Styled.PairSpecs>
          <Card>
            <div>{pair.token0.symbol}</div>
            <div>
              {formatNumber(parseFloat(pair.reserve0).toFixed(2))} -{" "}
              {pair.token0.symbol}
            </div>
          </Card>
          <Card>
            <div>{pair.token1.symbol}</div>
            <div>
              {formatNumber(parseFloat(pair.reserve0).toFixed(2))} -{" "}
              {pair.token0.symbol}
            </div>
          </Card>
          <Card>
            <div>
              Volume: {formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}
            </div>
            <div>
              24h Volume:
              {formatNumber(
                parseFloat(pairDayDatas[0].dailyVolumeToken0).toFixed(2)
              )}
              {}
            </div>
          </Card>
        </Styled.PairSpecs>
        <Card>
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

      <Card>
        <div>Recent Swaps</div>
        <RecentSwaps id={pair.id} />
      </Card>
    </Styled.AggregateGrid>
  );
};
