import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import { TokensContext } from "../../context/TokensContext";
import React, { useContext } from "react";
import Chart from "../Chart/Chart";
import { BarLoader } from "react-spinners";
import ContentLoader from "react-content-loader";

export const TokenChart = ({ numberOfItems }) => {
  const TokenContext = useContext(TokensContext);
  const { state: tokenState } = TokenContext;
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenState.selectedToken, numberOfItems: numberOfItems },
  });

  if (loading)
    return (
      <div>
        <BarLoader color="#36d7b7" />
        <br />
      </div>
    );

  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} />
    </div>
  );
};
