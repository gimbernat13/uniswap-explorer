import React, { useContext } from "react";
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
            <div className="info-card">
              <TokenDetails />
            </div>
            <div className="info-card">
              <TokenPairs />
            </div>
            <div className="info-card">
              <h2>Price USD (100 days) </h2>
              {/* <Select
                dispatch={(e) => setNumberOfDays(e.target.value)}
                placeHolder="Filter By"
                options={dateRangeOptions}
              /> */}
              <TokenChart numberOfItems={50} />
            </div>
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
