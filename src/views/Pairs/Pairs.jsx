import { useQuery } from "@apollo/client";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { Loader } from "../../components/Loader/Loader";
import { PairList } from "../../components/PairList/PairList";
import { PairTable } from "../../components/PairTable/PairTable";
import { PAIRS } from "./queries";
export function Pairs({ routes }) {
  const { loading, error, data } = useQuery(PAIRS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h3>Pairs</h3>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      <h3>Most Traded Pairs</h3>
      <PairTable data1={data.pairs} />
      <PairList data={data} />
    </div>
  );
}
