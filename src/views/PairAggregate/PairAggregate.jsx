import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { PairChart } from "../../components/PairChart/PairChart";
import { RecentSwaps } from "../../components/RecentSwaps/RecentSwaps";
import formatNumber from "../../utils/formatNumber";
import { PAIR_AGGREGATE } from "./queries";
import * as Styled from "./styles";

export const PairAggregate = () => {
  const { pairID } = useParams();

  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { pairDayDatas, pair } = data;

  console.log(pairDayDatas);
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
        <Chart yKey={"dailyTxns"} chartData={pairDayDatas} />
      </div>
      <RecentSwaps id={pair.id} />
    </Styled.AggregateGrid>
  );
};
