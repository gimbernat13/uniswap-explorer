import { useQuery } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokensContext } from "../../context/TokensContext";
import { PairCard } from "../PairCard/PairCard";
import { PAIRS } from "./queries";
import * as Styled from "./styles";
export const PoolList = () => {
  const { state: tokensState } = useContext(TokensContext);

  const { loading, error, data } = useQuery(PAIRS);

  console.log("data is ", data);
  if (loading) return "Loading...";
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
