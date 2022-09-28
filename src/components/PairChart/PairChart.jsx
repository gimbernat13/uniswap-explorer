import { useQuery } from "@apollo/client";
import { PAIR_DAY_DATAS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";

export const PairChart = () => {
  const TokensContext = useContext(TokenContext);
  const { tokenId } = TokensContext;
  const { loading, error, data } = useQuery(PAIR_DAY_DATAS, {
    variables: { id: tokenId },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("chart data ", data);
  return (
    <div>
      <Chart chartData={data.pairDayDatas} />
    </div>
  );
};
