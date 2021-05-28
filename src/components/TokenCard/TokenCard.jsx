import React, { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import { useQuery } from "@apollo/client";
import { TOKEN_DETAILS } from "./queries";
import formatNumber from "../../utils/formatNumber";
import { ThemeContext } from "../../context/ThemeContext";

export const TokenCard = ({ token, index }) => {
  const { setData, tokenId, filterBy } = useContext(TokenContext);
  const { theme, themes, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={() =>
        setData((prevState) => ({ ...prevState, tokenId: token.id }))
      }
      style= {theme}
      className={`card ${tokenId === token.id ? "active" : ""}`}
    >
      <div className="symbol bold large">{index}</div>
      <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
      <div className="symbol">
        {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))} USD{" "}
      </div>
    </div>
  );
};
