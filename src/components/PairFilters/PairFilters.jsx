import React, { useContext } from "react";
import {
  setFilterBy,
  setItemsOnPage,
  setSortBy,
} from "../../context/actionNames";
import { PairsContext } from "../../context/PairsContext";
import { Select } from "../Select/Select";
import { filterByOptions, itemsOnPageOptions, sortByOptions } from "./config";

export const PairFilters = () => {
  const PairContext = useContext(PairsContext);
  const { dispatch: pairsDispatch, state: tokensState } = PairContext;

  return (
    <div>
      <div className="filter-buttons">
        <Select
          dispatch={pairsDispatch}
          action={setFilterBy}
          placeHolder="Filter By"
          options={filterByOptions}
        />

        <Select
          dispatch={pairsDispatch}
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
