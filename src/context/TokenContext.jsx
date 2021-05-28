import * as React from "react";

export const TokenContext = React.createContext();

//FIXME: useReducer ?? redux ?? 
export const TokenContextProvider = ({ children }) => {
  const [{ tokenId, filterBy }, setData] = React.useState({
    tokenId: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    filterBy: "tradeVolumeUSD",
  });
  return (
    <TokenContext.Provider value={{ tokenId, filterBy, setData }}>
      {children}
    </TokenContext.Provider>
  );
};
