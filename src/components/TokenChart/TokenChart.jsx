import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokenContext } from "../../context/TokenContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";
import { BarLoader } from "react-spinners";

export const TokenChart = ({ numberOfItems }) => {
  const TokensContext = useContext(TokenContext);
  const { tokenId } = TokensContext;
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenId, numberOfItems: numberOfItems },
  });
  if (loading) return <BarLoader color="#36d7b7" />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} />
    </div>
  );
};
