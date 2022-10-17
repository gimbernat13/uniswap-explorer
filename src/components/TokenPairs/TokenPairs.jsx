import React from "react";
import { Link } from "react-router-dom";
import { PairCard } from "../PairCard/PairCard";

export const TokenPairs = ({ data }) => {
  return (
    <div className="pairs">
      {data.map((pair) => (
        <Link to={`/pairs/${pair.id}`}>
          <PairCard pair={pair} />
        </Link>
      ))}
    </div>
  );
};
