import { PairCard } from "components/atomic/molecules/PairCard/PairCard";
import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";

export const PairList = ({ data }) => {
  function handleChildClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <>
      <Styled.PoolGrid initial="hidden" animate="show">
        {data.pairs &&
          data.pairs.map((pair) => {
            return (
              <Link onClick={handleChildClick} to={`/pairs/${pair.id}`}>
                <PairCard pair={pair} />
              </Link>
            );
          })}
      </Styled.PoolGrid>
    </>
  );
};
