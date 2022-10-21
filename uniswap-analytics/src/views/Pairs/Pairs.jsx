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
export function Pairs({ routes }) {
  const viewTypes = [
    { id: "table", text: "Table", icon: "" },
    { id: "cards", text: "Cards", icon: "" },
  ];
  const [viewType, setViewType] = React.useState({
    id: "table",
    text: "Table",
    icon: "",
  });
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
      {viewType.id === "table" && <PairTable tableData={data.pairs} />}
      {viewType.id === "cards" && <PairList data={data} />}
    </div>
  );
}
