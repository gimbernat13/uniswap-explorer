import React from "react";
import {
  setFilterBy,
  setSortBy,
  setItemsOnPage,
  setSelectedToken,
} from "./actionNames";

export const TokensContext = React.createContext();

const INITIAL_STATE = {
  filterBy: "tradeVolumeUSD",
  sortBy: "desc",
  itemsOnPage: 150,
  selectedToken: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
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
    case setSelectedToken:
      return {
        ...state,
        selectedToken: action.payload,
      };
    default:
      throw new Error();
  }
}




export function TokensContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
  });

  return (
    <TokensContext.Provider value={{ state, dispatch }}>
      {children}
    </TokensContext.Provider>
  );
}
