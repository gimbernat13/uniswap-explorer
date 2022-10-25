import { useQuery } from "@apollo/client";
import { Card } from "components/atomic/atoms/Card/Card";
import { Loader } from "components/atomic/atoms/Loader/Loader";
import React from "react";
import { UNISWAP } from "./queries";

export const Home = () => {
  const { loading, error, data } = useQuery(UNISWAP);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  const { uniswapFactory } = data;
  console.log("unis", uniswapFactory);
  const { totalVolumeUSD, totalLiquidityUSD, txCount } = uniswapFactory;

  return (
    <>
      {/* <Card fitContent> */}
        <div className="large-text">Uniswap Explorer</div>
      {/* </Card> */}
      <Card>
        <h1>{totalLiquidityUSD}</h1>
        <h1>{totalVolumeUSD}</h1>
        <h2>{txCount}</h2>
      </Card>
    </>
  );
};
