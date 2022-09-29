import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import Chart from "../../components/Chart/Chart";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { PairChart } from "../../components/PairChart/PairChart";
import { RecentSwaps } from "../../components/RecentSwaps/RecentSwaps";
import formatNumber from "../../utils/formatNumber";
import { PAIR_AGGREGATE } from "./queries";
import * as Styled from "./styles";

export const PairAggregate = () => {
  const { pairID } = useParams();
  const [selectedFilter, setSelectedFilter] = React.useState("dailyVolumeUSD");
  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair } = data;

  return (
    <Styled.AggregateGrid>
      <div className="info-card">
        <h3>
          {pair.token0.symbol} - {pair.token1.symbol}
        </h3>
        <p>
          Reserve : {pair.token0.symbol} {formatNumber(pair.reserve0)}
          {pair.token1.symbol}
        </p>
        <p>
          Reserve : {pair.token1.symbol} - {pair.reserve1}
        </p>
        <p>Lp Count: {pair.liquidityProviderCount} </p>
        <h3>{pairDayDatas.dailyTxns}</h3>
      </div>
      <div className="info-card">
        <h3>Recent Swaps</h3>
        <RecentSwaps id={pair.id} />
      </div>
      <div className="info-card">
        <FlexContainer>
          <Button onClick={() => setSelectedFilter("dailyTxns")}>
            Daily Transactions
          </Button>
          <Button onClick={() => setSelectedFilter("dailyVolumeUSD")}>
            Daily Volume
          </Button>
        </FlexContainer>

        <Chart yKey={selectedFilter} chartData={pairDayDatas} />
      </div>
    </Styled.AggregateGrid>
  );
};
