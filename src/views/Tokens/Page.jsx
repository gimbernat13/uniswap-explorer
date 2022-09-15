import React, { useContext } from "react";
import Chart from "../../components/Chart/Chart";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { Layout } from "../../components/Layout/Layout";
import { TokenCardList } from "../../components/TokenCardList/TokenCardList";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";
import { ThemeContext } from "../../context/ThemeContext";


function Page({ data }) {

  const { theme, themes, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={theme} className="App">
      <Layout>
    
        <div className="main-panel container">
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
              <br />
            </div>
            <div className="bottom ">
              <FilterButtons />
              <TokenCardList />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Page;
