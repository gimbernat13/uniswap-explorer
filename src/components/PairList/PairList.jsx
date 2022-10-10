import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import { Loader } from "../Loader/Loader";
import { PairCard } from "../PairCard/PairCard";
import { PAIRS } from "./queries";
import * as Styled from "./styles";

export const PairList = () => {

  const { loading, error, data } = useQuery(PAIRS);

  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
 

      <Styled.PoolGrid variants={container} initial="hidden" animate="show">
        {data.pairs &&
          data.pairs.map((pair) => {
            return (
              <Link to={`/pairs/${pair.id}`}>
                <PairCard  pair={pair} />
              </Link>
            );
          })}
      </Styled.PoolGrid>
    </>
  );
};
