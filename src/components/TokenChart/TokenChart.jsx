import { TokensContext } from "../../context/TokensContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";
export const TokenChart = ({ data }) => {
  const TokenContext = useContext(TokensContext);
  const { state: tokenState } = TokenContext;

  return (
    <div>
      <Chart chartData={data} yKey={"priceUSD"} />
    </div>
  );
};
