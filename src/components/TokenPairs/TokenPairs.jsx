import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { TOKEN_PAIRS } from "./queries";
import { TokensContext } from "../../context/TokensContext";
import formatNumber from "../../utils/formatNumber";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { Loader } from "../Loader/Loader";

export const TokenPairs = () => {
  const { state: tokenState, dispatch: tokenDispatch } =
    useContext(TokensContext);

  console.log("context ", useContext(TokensContext));
  const { loading, error, data } = useQuery(TOKEN_PAIRS, {
    variables: { id: tokenState.selectedToken },
  });
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div className="pairs">
      {data.pairs.map((pair) => (
        <Link to={`/pairs/${pair.id}`}>
          <div className="pair-card">
            <div className="pair">{pair.token0.symbol}</div>
            <div className="pair"> {pair.token1.symbol}</div>
            <div className="pairsf">
              ${formatNumber(parseFloat(pair.volumeUSD).toFixed(2))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
