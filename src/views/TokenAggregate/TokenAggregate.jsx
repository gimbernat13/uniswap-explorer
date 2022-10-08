import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";
import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import { setSelectedToken } from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import ContentLoader from "react-content-loader";

export const TokenAggregate = () => {
  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);
  React.useEffect(() => {
    dispatch({ type: setSelectedToken, payload: tokenID });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tokenID]);

  return (
    <Styled.TokenAggregateGrid>
      <div>
        <Card>
          <TokenDetails tokenID={tokenID} />
        </Card>
        <br />
        <Card>
          <h3>Price USD (100 days) </h3>
          <TokenChart numberOfItems={50} />
          {/* <Select
                dispatch={(e) => setNumberOfDays(e.target.value)}
                placeHolder="Filter By"
                options={dateRangeOptions}
              /> */}
        </Card>
      </div>

      <Card>
        <h3> Top 3 Trading Pairs (Volume) </h3>

        <TokenPairs />
      </Card>
    </Styled.TokenAggregateGrid>
  );
};
