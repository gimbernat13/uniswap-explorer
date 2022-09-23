import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import formatNumber from "../../utils/formatNumber";
import { PAIRS } from "./queries";
import * as Styled from "./styles";
export const PoolList = () => {
  const { state: tokensState } = useContext(TokensContext);

  const { loading, error, data } = useQuery(PAIRS);

  console.log("data is ", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <h2>Most Traded Pairs</h2>
      <Styled.PoolGrid>
        {data.pairs &&
          data.pairs.map((pair) => {
            return (
              <Link to={`/pairs/${pair.id}`}>
                <Styled.PoolCard key={pair.id}>
                  <Styled.PoolCardInner>
                    <div>
                      {pair.token0.symbol} - {pair.token1.symbol}{" "}
                    </div>
                    <div>TX Count: {pair.txCount}</div>
                    <div>
                      Total Volume : ${formatNumber(parseInt(pair.volumeUSD))}
                    </div>
                  </Styled.PoolCardInner>
                </Styled.PoolCard>
              </Link>
            );
          })}
      </Styled.PoolGrid>
    </>
  );
};
