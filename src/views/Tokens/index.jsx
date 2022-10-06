import React from "react";
import { Switch, useParams } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";

export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });

  console.log(useParams());

  return (
    <div>
      <h2>Tokens</h2>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>

      <FilterButtons />
      <TokenCardList />
    </div>
  );
}
