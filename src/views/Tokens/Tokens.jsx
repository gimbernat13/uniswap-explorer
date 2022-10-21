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
import { UilTable } from "@iconscout/react-unicons";
import { UilListUl } from "@iconscout/react-unicons";
export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });
  const viewTypes = [
    { id: "table", text: "Table", icon: <UilListUl size={15} /> },
    { id: "cards", text: "Cards", icon: <UilTable size={15} /> },
  ];

  const [viewType, setViewType] = React.useState({
    id: "table",
    text: "Table",
    icon: <UilTable />,
  });

  const { loading, error, data } = useQuery(TOKENS);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <h3>Tokens</h3>
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
              // <UilAirplay size="140" color="#61DAFB" />
              <Button
                isActive={viewType.id === type.id}
                onClick={() => setViewType(type)}
              >
                {type.icon}
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
