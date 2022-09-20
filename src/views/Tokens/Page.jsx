import React, { useContext } from "react";
import Chart from "../../components/Chart/Chart";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Layout } from "../../components/Layout/Layout";
import { NavButtons } from "../../components/NavButtons/NavButtons";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";
import { TokenTransactions } from "../../components/TokenTransactions/TokenTransactions";
import { ThemeContext } from "../../context/ThemeContext";

function Page({ data }) {
  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={theme} className="App">
      {/* <div className="dark-overlay"></div> */}
      <div className="main-panel">
        <h3>Uniswap V2 Explorer</h3>
        <div className="card-grid ">
          <div className="top ">
            <div className="info-card">
              <TokenDetails />
              <TokenPairs />
            </div>
            <div className="info-card">
              <h2>Price USD (100 days) </h2>
              <Chart />
            </div>
          </div>
          <div className="middle">
            <TokenTransactions />
          </div>
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
