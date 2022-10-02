import React, { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";

import formatNumber from "../../utils/formatNumber";
import { ThemeContext } from "../../context/ThemeContext";
import { useParams } from "react-router-dom";

export const TokenCard = ({ token, index }) => {
  const { theme } = useContext(ThemeContext);
  const { tokenID } = useParams();

  console.log("hola ", useParams());
  return (
    <div
      style={theme}
      className={`card ${tokenID === token.id ? "active" : ""}`}
    >
      <div className="symbol bold large">{index}</div>
      <div className="symbol bold large">{token.symbol.toUpperCase()}</div>
      <div className="symbol">
        {formatNumber(parseFloat(token.tradeVolumeUSD).toFixed(2))} USD{" "}
      </div>
    </div>
  );
};
