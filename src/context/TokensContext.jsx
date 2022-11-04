import React from 'react';
import {
  setFilterBy,
  setSortBy,
  setItemsOnPage,
  setSelectedToken,
  setTimeFrame,
} from './actionNames';

export const TokensContext = React.createContext();
export const timeOptions = [
  {
    id: 7,
    name: 'Last Week',
  },
  {
    id: 30,
    name: '30 Days',
  },
  {
    id: 100,
    name: '100 Days',
  },
  {
    id: 500,
    name: '500 days',
  },
  {
    id: 1000,
    name: 'All Time',
  },
];

export const tokenFilters = [
  { name: 'Price', id: 'priceUSD' },
  { name: 'Daily Volume', id: 'dailyVolumeUSD' }, // FIXME: Excluded for now until chart fix
  { name: "Daily Tx's", id: 'dailyTxns' },
];
const INITIAL_STATE = {
  filterBy: tokenFilters[0],
  sortBy: 'desc',
  itemsOnPage: 150,
  selectedToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  timeFrame: timeOptions[2],
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
    case setTimeFrame:
      return {
        ...state,
        timeFrame: action.payload,
      };
    default:
      throw new Error();
  }
}

export function TokensContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...INITIAL_STATE,
  });
  const memoizedValues = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <TokensContext.Provider value={memoizedValues}>
      {children}
    </TokensContext.Provider>
  );
}
