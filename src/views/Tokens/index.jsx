import React, { useContext } from "react";
import { Switch, useParams } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";

import { ThemeContext } from "../../context/ThemeContext";
import { TokensContext } from "../../context/TokensContext";
import { TokenAggregate } from "../TokenAggregate/TokenAggregate";

export function TokensView({ routes }) {
  const { theme } = useContext(ThemeContext);
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });

  const { tokenID } = useParams();
  const { state: tokensState, dispatch } = useContext(TokensContext);
  console.log("token state ", tokensState);
  React.useEffect(() => {}, []);

  return (
    <div>
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
