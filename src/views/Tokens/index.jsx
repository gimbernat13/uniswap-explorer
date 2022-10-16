import { useQuery } from "@apollo/client";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { Button } from "../../components/Button/Button";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Loader } from "../../components/Loader/Loader";
import { Swap } from "../../components/Swap/Swap";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenTable } from "../../components/TokenTable/TokenTable";
import { TOKENS } from "./queries";
import * as Styled from "./styles";

export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });
  const viewTypes = [
    { id: "table", text: "Table", icon: "" },
    { id: "cards", text: "Cards", icon: "" },
  ];

  const [viewType, setViewType] = React.useState({
    id: "table",
    text: "Table",
    icon: "",
  });

  const { loading, error, data } = useQuery(TOKENS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  console.log("table data ", data);
  return (
    <div>
      <h2>Tokens</h2>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>

      <Swap />
      <Styled.FlexSpaced>
        <FilterButtons />
        <h3>Most Traded</h3>
        <div>
          {viewTypes.map((type) => {
            return (
              <Button
                isActive={viewType.id === type.id}
                onClick={() => setViewType(type)}
              >
                {type.text}
              </Button>
            );
          })}
        </div>
      </Styled.FlexSpaced>

      {viewType.id === "table" && <TokenTable tableData={data.tokens} />}
      {viewType.id === "cards" && <TokenCardList />}
    </div>
  );
}
