import React from "react";
import {
  setFilterBy,
  setSortBy,
  setItemsOnPage,
  setSelectedPair,
} from "./actionNames";

export const PairsContext = React.createContext();

const INITIAL_STATE = {
  filterBy: "tradeVolumeUSD",
  sortBy: "asc",
  itemsOnPage: 150,
  selectedPair: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case setFilterBy:
      return {
        ...state,
        filterBy: action.payload,
      };
    case setSortBy:
      return {
        ...state,
        sortBy: action.payload,
      };
    case setItemsOnPage:
      return {
        ...state,
        itemsOnPage: action.payload,
      };
    case setSelectedPair:
      return {
        ...state,
        selectedPair: action.payload,
      };
    default:
      throw new Error();
  }
}

export function PairsContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
  });

  return (
    <PairsContext.Provider value={{ state, dispatch }}>
      {children}
    </PairsContext.Provider>
  );
}
