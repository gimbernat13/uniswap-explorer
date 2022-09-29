import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Select } from "../../components/Select/Select";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";

import { ThemeContext } from "../../context/ThemeContext";
import { dateRangeOptions } from "./config";

function Page({ data }) {
  const { theme } = useContext(ThemeContext);
  const [numberOfDays, setNumberOfDays] = React.useState({
    value: 50,
    name: 50,
  });
  return (
    <div style={theme} className="App">
      {/* <div className="dark-overlay"></div> */}
      <div className="main-panel">
        <h3>Uniswap V2 Explorer</h3>
        <div className="card-grid ">
          {}
          <div className="top ">
            <Card>
              <TokenDetails />
            </Card>
            <Card>
              <TokenPairs />
            </Card>
            <Card>
              <h2>Price USD (100 days) </h2>
              {/* <Select
                dispatch={(e) => setNumberOfDays(e.target.value)}
                placeHolder="Filter By"
                options={dateRangeOptions}
              /> */}
              <TokenChart numberOfItems={50} />
            </Card>
          </div>
          <div className="middle"></div>
          <div className="bottom">
            <FilterButtons />
            <TokenCardList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
