import React from "react";
import * as Styled from "./styles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export const Card = ({ children, height }) => {
  return (
    <Styled.Card
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="transparent-card"
    >
      <Styled.CardInner height={height}>{children}</Styled.CardInner>
    </Styled.Card>
  );
};
