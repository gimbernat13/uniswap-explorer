import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_PAIRS } from "./queries";
import { TokensContext } from "../../context/TokensContext";
import formatNumber from "../../utils/formatNumber";
import { Link } from "react-router-dom";

export const TokenPairs = () => {
  const { state: tokenState, dispatch: tokenDispatch } =
    useContext(TokensContext);

  console.log("context ", useContext(TokensContext));
  const { loading, error, data } = useQuery(TOKEN_PAIRS, {
    variables: { id: tokenState.selectedToken },
  });
  if (loading) return <div className="pairs"> Loading... </div>;
  if (error) return `Error! ${error.message}`;
  return (
    <div className="pairs">
      <h3> Top 3 Trading Pairs (Volume) </h3>
      {data.pairs.map((pair) => (
        <Link to={`/pairs/${pair.id}`}>
          <div className="pair-card">
            <div className="pair">{pair.token0.symbol}</div>

            <div className="pair"> {pair.token1.symbol}</div>
            <div className="pair">
              ${formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
