import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";

export const TokenChart = ({ numberOfItems }) => {
  const TokensContext = useContext(TokenContext);
  const { tokenId } = TokensContext;
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenId, numberOfItems: 33 },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} />
    </div>
  );
};
