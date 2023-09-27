import React, { useState, useEffect } from 'react';
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
      setAllTokens(prevTokens => [...prevTokens, ...data.tokens]);
    }
  }, [data]);

  const loadMoreTokens = () => {
    setLoadingMore(true);
    let newSkip = skip + 30;
    setSkip(newSkip);
    fetchMore({
      variables: { skip: newSkip, first: 30 },
      updateQuery: (prev, { fetchMoreResult }) => {
        setLoadingMore(false);
        if (!fetchMoreResult) return prev;
        return { tokens: [...prev.tokens, ...fetchMoreResult.tokens] };
      }
    });
  };


  const { location } = useHistory();
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

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
      {viewType.id === "cards" && <TokenCardList data={data} />}
      <br />
      {loadingMore ? <Loader /> : <Button isActive width="100%" onClick={loadMoreTokens} disabled={loadingMore}>Load More Tokens</Button>}
      <br />
      <br />
      <br />
    </div>
  );
}
