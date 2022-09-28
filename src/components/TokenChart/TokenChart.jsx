import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";

export const TokenChart = () => {
  const TokensContext = useContext(TokenContext);
  const { tokenId } = TokensContext;
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenId },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("chart data ", data);
  return (
    <div>
      <Chart chartData={data.tokenDayDatas} />
    </div>
  );
};
