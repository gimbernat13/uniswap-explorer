import { useQuery } from "@apollo/client";
import React from "react";
import { Switch } from "react-router-dom";
import { RouteWithSubRoutes } from "../..";

import { PAIRS } from "./queries";
import * as Styled from "./styles";
import { Button } from "components/atomic/atoms/Button/Button";
import { Loader } from "components/atomic/atoms/Loader/Loader";
import { PairList } from "components/atomic/organisms/PairList/PairList";
import { PairTable } from "components/atomic/organisms/PairTable/PairTable";
import { useViewType } from "hooks/useViewType";
import { ViewTypeButtons } from "components/atomic/molecules/ViewTypeButtons/ViewTypeButtons";
export function Pairs({ routes }) {
  const { viewType, viewTypes, handleViewTypeChange } = useViewType();
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
      <Styled.FlexSpaced>
        <h3>Most Traded</h3>
        <div>
          <ViewTypeButtons
            viewType={viewType}
            viewTypes={viewTypes}
            handleViewTypeChange={handleViewTypeChange}
          />
        </div>
      </Styled.FlexSpaced>
      {viewType.id === "table" && <PairTable tableData={data.pairs} />}
      {viewType.id === "cards" && <PairList data={data} />}
    </div>
  );
}
