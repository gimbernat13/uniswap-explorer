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

export const PairAggregate = () => {
  const { pairID } = useParams();
  const [selectedFilter, setSelectedFilter] =
    React.useState("dailyVolumeToken0");
  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair } = data;

  return (
    <Styled.AggregateGrid>
      <Card>
        <h2>
          {pair.token0.symbol} - {pair.token1.symbol}
        </h2>
        <p>
          Reserve : {pair.token0.symbol} {pair.reserve0}
          {pair.token1.symbol}
        </p>
        <p>
          Reserve : {pair.token1.symbol} - {pair.reserve1}
        </p>
        <h3>{pairDayDatas.dailyTxns}</h3>
      </Card>
      <Card>
        <h3>Recent Swaps</h3>
        <RecentSwaps id={pair.id} />
      </Card>
      <Card>
        <FlexContainer>
          {/* <Button onClick={() => setSelectedFilter("dailyTxns")}>
            Daily Transactions
          </Button> */}
          <Button onClick={() => setSelectedFilter("dailyVolumeUSD")}>
            Daily Volume
          </Button>
        </FlexContainer>
        <BarCharts
          yKey={selectedFilter}
          yValue1={pairDayDatas.dailyVolumeToken0}
          yValue2={pairDayDatas.dailyVolumeToken1}
          chartData={pairDayDatas}
        />
        <Chart yKey={selectedFilter} chartData={pairDayDatas} />
      </Card>
    </Styled.AggregateGrid>
  );
};
