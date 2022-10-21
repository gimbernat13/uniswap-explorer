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
import { useViewType } from "hooks/useViewType";
import { ViewTypeButtons } from "components/atomic/molecules/ViewTypeButtons/ViewTypeButtons";
export function TokensView({ routes }) {
  // FIXME: ADD TIME FILTER TO CHARTS
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });
  const { viewType, viewTypes, handleViewTypeChange } = useViewType();

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
