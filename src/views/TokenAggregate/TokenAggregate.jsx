import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";
import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import { setSelectedToken } from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { useQuery } from "@apollo/client";
import { Loader } from "../../components/Loader/Loader";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";

export const TokenAggregate = () => {
  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);
  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id: tokenID },
  });
  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tokenID]);
  if (loading) return <Loader />;

  if (error) return `Error! ${error.message}`;
  const { name, symbol, tradeVolumeUSD, totalLiquidity, txCount } = data.token;

  return (
    <Styled.TokenAggregateGrid>
      <div>
        <Styled.LeftGrid>
          <Card>
            <div className="large-text">{symbol}</div>

            <div className="medium-text">{name}</div>
            <div className="detail-links">
              <a
                target="_blank"
                // href={`https://www.coingecko.com/en/coins/${tokenId}`}
              >
                <img
                  id="coingecko"
                  src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                // href={`https://etherscan.io/address/${tokenId}`}
              >
                <img
                  src="https://etherscan.io/images/logo-ether.png?v=0.0.2"
                  alt=""
                />
              </a>
            </div>
          </Card>
          <Card>
            <ul>
              <li>
                Volume:
                {formatNumber(parseFloat(tradeVolumeUSD).toFixed(2))} USD{" "}
              </li>
              <li>
                Liquidity:
                {formatNumber(parseFloat(totalLiquidity).toFixed(2))}{" "}
              </li>
              <li>TX's: {formatNumber(parseFloat(txCount))}</li>
            </ul>
          </Card>
          <div className="large">
            <Card>
              <h3>Price</h3>
              <TokenChart />
            </Card>
          </div>
        </Styled.LeftGrid>
      </div>

      <div>
        <TokenPairs />
      </div>
    </Styled.TokenAggregateGrid>
  );
};
