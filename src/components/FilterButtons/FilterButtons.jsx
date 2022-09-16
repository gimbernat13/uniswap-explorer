import React, { useContext } from "react";
import {
  setFilterBy,
  setItemsOnPage,
  setSortBy,
} from "../../context/actionNames";
import { TokensContext } from "../../context/TokensContext";
import { Select } from "../Select/Select";
import { filterByOptions, itemsOnPageOptions, sortByOptions } from "./config";

export const FilterButtons = () => {
  const TokenContext = useContext(TokensContext);
  const { dispatch: tokensDispatch, state: tokensState } = TokenContext;

  return (
    <div>
      <div className="filter-buttons">
        <Select
          dispatch={tokensDispatch}
          action={setFilterBy}
          placeHolder="Filter By"
          options={filterByOptions}
        />
        <Select
          dispatch={tokensDispatch}
          action={setSortBy}
          placeHolder="Sort By"
          options={sortByOptions}
        />
        <Select
          dispatch={tokensDispatch}
          action={setItemsOnPage}
          placeHolder="Items per page"
          options={itemsOnPageOptions}
        />
      </div>
    </div>
  );
};
{
}
