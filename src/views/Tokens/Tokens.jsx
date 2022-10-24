import { useQuery } from "@apollo/client";
import React from "react";
import { Switch, useParams } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";

import { Loader } from "components/atomic/atoms/Loader/Loader";
import { TOKENS } from "./queries";
import * as Styled from "./styles";
import { TokenCardList } from "components/atomic/organisms/TokenCardList/TokenCardList";
import { TokenTable } from "components/atomic/organisms/TokenTable/TokenTable";

import { useViewType } from "hooks/useViewType";
import { ViewTypeButtons } from "components/atomic/molecules/ViewTypeButtons/ViewTypeButtons";
import { Card } from "components/atomic/atoms/Card/Card";
export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const { viewType, viewTypes, handleViewTypeChange } = useViewType();
  const { loading, error, data } = useQuery(TOKENS);

  console.log("oarams ", useParams());
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h3>Tokens</h3>
      <Card fitContent>Select a Token to view Stats</Card>
      <br />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <br />
      <Styled.FlexSpaced>
        {/* <FilterButtons /> */}
        <h3>Most Traded</h3>
        <div>
          <ViewTypeButtons
            viewType={viewType}
            viewTypes={viewTypes}
            handleViewTypeChange={handleViewTypeChange}
          />
        </div>
      </Styled.FlexSpaced>

      {viewType.id === "table" && <TokenTable tableData={data.tokens} />}
      {viewType.id === "cards" && <TokenCardList data={data} />}
    </div>
  );
}
