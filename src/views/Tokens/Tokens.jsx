import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from "@apollo/client";
import { Switch, useHistory } from "react-router-dom";
import { RouteWithSubRoutes } from "../.."; // Adjust according to your project structure
import { TOKENS } from "./queries";
import { Loader } from "components/atomic/atoms/Loader/Loader";
import { TokenCardList } from "components/atomic/organisms/TokenCardList/TokenCardList";
import { TokenTable } from "components/atomic/organisms/TokenTable/TokenTable";
import { useViewType } from "hooks/useViewType";
import { ViewTypeButtons } from "components/atomic/molecules/ViewTypeButtons/ViewTypeButtons";
import { Card } from "components/atomic/atoms/Card/Card";
import { hasSubRoute } from "utils/hasSubRoute";
import * as Styled from "./styles"; // Adjust according to your project structure
import { Button } from 'components/atomic/atoms/Button/Button';

export function TokensView({ routes }) {
    const { viewType, viewTypes, handleViewTypeChange } = useViewType();
    const [skip, setSkip] = useState(0);
    const [allTokens, setAllTokens] = useState([]);
    const [loadingMore, setLoadingMore] = useState(false);
  
    const { loading, error, data, fetchMore } = useQuery(TOKENS, {
      variables: { skip: 0, first: 15 }
    });
  
    useEffect(() => {
      if (data && data.tokens) {
        setAllTokens(prevTokens => {
          const uniqueTokensMap = new Map();
          [...prevTokens, ...data.tokens].forEach(token => uniqueTokensMap.set(token.id, token));
          return [...uniqueTokensMap.values()];
        });
      }
    }, [data]);

    const loadMoreTokens = useCallback(() => {
      setLoadingMore(true);
      setSkip(prevSkip => prevSkip + 50);
      fetchMore({
        variables: { skip, first: 50 },
        updateQuery: (prev, { fetchMoreResult }) => {
          setLoadingMore(false);
          if (!fetchMoreResult) return prev;
          return { tokens: [...prev.tokens, ...fetchMoreResult.tokens] };
        }
      });
    }, [fetchMore, skip]);

    const { location } = useHistory();
    if (loading) return <Loader  />;
    if (error) return `Error! ${error.message}`;
    console.log("rendere")
    return (
      <div>
        <h3>Tokens</h3>
        {!hasSubRoute("/tokens", location) && (<Card fitContent>Select a Token to view Stats</Card>)}
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        <Styled.FlexSpaced>
          <h3>Most Traded</h3>
          <div>
            <ViewTypeButtons viewType={viewType} viewTypes={viewTypes} handleViewTypeChange={handleViewTypeChange} />
          </div>
        </Styled.FlexSpaced>
        {viewType.id === "table" && <TokenTable tableData={allTokens} />}
        {viewType.id === "cards" && <TokenCardList data={allTokens} />}
        <br />
        {loadingMore ? <Loader /> : <Button isActive width="100%" onClick={loadMoreTokens} disabled={loadingMore}>Load More Tokens</Button>}
        <br />
        <br />
        <br />
      </div>
    );
}
