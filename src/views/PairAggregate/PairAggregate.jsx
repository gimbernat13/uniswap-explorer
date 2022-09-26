import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { PAIR_AGGREGATE } from "./queries";

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
    <div>
      <h1>
        {pair.token0.symbol} - {pair.token1.symbol}
      </h1>
      <h2>
        Reserve : {pair.token0.symbol} {pair.reserve0}
        {pair.token1.symbol}
      </h2>
      <h2>
        Reserve : {pair.token1.symbol} - {pair.reserve1}
      </h2>
      <h2>Lp Count: {pair.liquidityProviderCount} </h2>
      <h3>{pairDayDatas.dailyTxns}</h3>
    </div>
  );
};
