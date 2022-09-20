import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TokensContext } from "../../context/TokensContext";
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
      <div>Most Traded Pairs</div>
      <Styled.PoolGrid>
        {data.pairs &&
          data.pairs.map((pair, i) => {
            return (
              <Styled.PoolCard>
                <Styled.PoolCardInner>

                    
                  <div> 
                    {pair.token0.symbol} - {pair.token1.symbol}{" "}
                  </div>
                  <div>{pair.txCount}</div>
                  <div>Volume 24 hr : {pair.volumeUSD}</div>
                </Styled.PoolCardInner>
              </Styled.PoolCard>
            );
          })}
      </Styled.PoolGrid>
    </>
  );
};
