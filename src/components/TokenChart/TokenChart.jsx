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
        {" "}
        <BarLoader color="#36d7b7" />
        <br />
        <ContentLoader
          speed={2}
          width={"100%"}
          height={"220px"}
          // viewBox="0 0 800 460"
          backgroundColor="#32323250"
          foregroundColor=" rgba(121, 121, 121, 0.231)"
        >
          rgba(15, 53, 255, 0.3) 12.82%, rgba(255, 72, 181, 0.3) 41.96%,
          rgba(15, 53, 255, 0.08) 75.06%, rgba(15, 53, 255, 0.11) 107.66%
          {/* <circle cx="31" cy="31" r="15" /> */}
          <rect
            x="0"
            y="0"
            rx="1rem"
            ry="1rem"
            borderRadius
            width="100%"
            height="250px"
          />
        </ContentLoader>
      </div>
    );

  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <Chart chartData={data.tokenDayDatas} yKey={"priceUSD"} />
    </div>
  );
};
