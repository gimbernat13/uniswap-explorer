import { TokenCard } from "components/atomic/molecules/TokenCard/TokenCard";
import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./styles";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export const TokenCardList = ({ data }) => {
  return (
    <Styled.TokenGrid variants={container} initial="hidden" animate="show">
      {data.tokens.map((token, i) => {
        return (
          <Link to={`/tokens/${token.id}`}>
            <TokenCard index={i + 1} token={token} />
          </Link>
        );
      })}
    </Styled.TokenGrid>
  );
};
