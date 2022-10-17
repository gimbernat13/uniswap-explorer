import { useQuery } from "@apollo/client";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { Button } from "components/atomic/atoms/Button/Button";
import { Loader } from "components/atomic/atoms/Loader/Loader";
import { TOKENS } from "./queries";
import * as Styled from "./styles";
import { TokenCardList } from "components/atomic/organisms/TokenCardList/TokenCardList";
import { TokenTable } from "components/atomic/organisms/TokenTable/TokenTable";

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
  return (
    <div>
      <h2>Tokens</h2>
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
      {viewType.id === "cards" && <TokenCardList data={data} />}
    </div>
  );
}
