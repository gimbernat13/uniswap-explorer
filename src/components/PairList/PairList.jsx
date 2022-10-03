import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import { PairCard } from "../PairCard/PairCard";
import { PAIRS } from "./queries";
import * as Styled from "./styles";
import { BarLoader } from "react-spinners";
export const PairList = () => {
  const { state: tokensState } = useContext(TokensContext);

  const { loading, error, data } = useQuery(PAIRS);

  if (loading) return <BarLoader color="#36d7b7" />;
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
      <h2>Most Traded Pairs</h2>

      <Styled.PoolGrid variants={container} initial="hidden" animate="show">
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
