import React, { useContext } from "react";
import { Route, useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Select } from "../../components/Select/Select";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";

import { ThemeContext } from "../../context/ThemeContext";
import { TokenAggregate } from "../TokenAggregate/TokenAggregate";
import { dateRangeOptions } from "./config";

function Page({ data }) {
  const { theme } = useContext(ThemeContext);
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });

  const { tokenID } = useParams();

  return (
    <div style={theme} className="App">
      {/* <div className="dark-overlay"></div> */}
      <div className="main-panel">
        <h3>Uniswap V2 Explorer</h3>
        <div className="card-grid ">
          <TokenAggregate />
          <div className="bottom">
            <FilterButtons />
            <TokenCardList tokenID={tokenID} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
