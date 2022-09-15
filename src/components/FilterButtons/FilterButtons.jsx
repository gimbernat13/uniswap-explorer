import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TokenContext } from "../../context/TokenContext";
import { Select } from "../Select/Select";

export const FilterButtons = () => {
  const TokensContext = useContext(TokenContext);
  const { setData, filterBy } = TokensContext;
  const { theme, themes, toggleTheme } = useContext(ThemeContext);

  const filters = [
    { id: "totalLiquidity", name: "Top Liquidity" },
    { id: "tradeVolumeUSD", name: "Top Volume" },
  ];
  const options = [
    {
      value: "liquidity",
      name: " Liquidity",
    },
    {
      value: "volume",
      name: "Volume",
    },
    {
      value: "volume",
      name: "Newly Added",
    },
  ];
  return (
    <div>
      <div className="filter-buttons">
        {/* {filters.map((filter) => {
          return (
            <div
              onClick={() =>
                setData((prevState) => ({ ...prevState, filterBy: filter.id }))
              }
              key={filter.id}
              className={`button ${filterBy === filter.id ? "active" : ""}`}
            >
              {filter.name}
            </div>
          );
        })} */}

        {/* <div className="theme" onClick={toggleTheme}>
          {theme === themes.dark ? <h2>🌜</h2> : <h2>🌞</h2>}
        </div> */}
        <Select placeHolder="Filter By" options={options} />
        <Select placeHolder="Items per page " options={options} />
        <Select placeHolder="Sort" options={options} />

        <Select />
      </div>
    </div>
  );
};
{
}
