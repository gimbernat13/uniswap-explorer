import { useQuery } from "@apollo/client";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Loader } from "../../components/Loader/Loader";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenTable } from "../../components/TokenTable/TokenTable";
import { TOKENS } from "./queries";

export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });

  const { loading, error, data } = useQuery(TOKENS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  console.log("table data ", data);
  return (
    <div>
      <h3>Tokens</h3>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>

      <FilterButtons />
      <TokenTable tableData={data.tokens} />

      <TokenCardList />
    </div>
  );
}
