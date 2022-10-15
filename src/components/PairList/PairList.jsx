import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import { Loader } from "../Loader/Loader";
import { PairCard } from "../PairCard/PairCard";
import * as Styled from "./styles";

export const PairList = ({ data }) => {
  return (
    <>
      <Styled.PoolGrid initial="hidden" animate="show">
        {data.pairs &&
          data.pairs.map((pair) => {
            return (
              <Link to={`/pairs/${pair.id}`}>
                <PairCard pair={pair} />
              </Link>
            );
          })}
      </Styled.PoolGrid>
    </>
  );
};
