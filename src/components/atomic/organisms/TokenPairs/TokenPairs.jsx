import React from "react";
import { Link } from "react-router-dom";
import { PairCard } from "../../molecules/PairCard/PairCard";
import * as Styled from "./styles";
export const TokenPairs = ({ data }) => {
  return (
    <Styled.TokenPairs>
      {data.map((pair) => (
        <Link to={`/pairs/${pair.id}`}>
          <PairCard pair={pair} />
        </Link>
      ))}
    </Styled.TokenPairs>
  );
};
