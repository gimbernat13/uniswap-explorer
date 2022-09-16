import React, { useContext } from "react";
import {
  setFilterBy,
  setItemsOnPage,
  setSortBy,
} from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { Select } from "../Select/Select";

export const FilterButtons = () => {
  const TokenContext = useContext(TokensContext);
  const { dispatch: tokensDispatch, state: tokensState } = TokenContext;

  const options = [
    {
      value: "totalLiquidity",
      name: " Liquidity",
    },
    {
      value: "tradeVolumeUSD",
      name: "Volume",
    },
    {
      value: "volume",
      name: "Newly Added",
    },
  ];
  return (
    <div>
      {tokensState.filterBy}
      <div className="filter-buttons">
        <Select
          dispatch={tokensDispatch}
          action={setFilterBy}
          placeHolder="Filter By"
          options={options}
        />

        <Select
          dispatch={tokensDispatch}
          action={setSortBy}
          placeHolder="Sort By"
          options={options}
        />
        <Select
          dispatch={tokensDispatch}
          action={setItemsOnPage}
          placeHolder="Items per page"
          options={options}
        />
      </div>
    </div>
  );
};
{
}
