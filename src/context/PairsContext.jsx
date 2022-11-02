import React from 'react';
import {
  setFilterBy,
  setSortBy,
  setItemsOnPage,
  setSelectedPair,
} from './actionNames';

export const PairsContext = React.createContext();

const INITIAL_STATE = {
  filterBy: 'tradeVolumeUSD',
  sortBy: 'asc',
  itemsOnPage: 150,
  selectedPair: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
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
  const memoizedValues = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <PairsContext.Provider value={memoizedValues}>
      {children}
    </PairsContext.Provider>
  );
}
