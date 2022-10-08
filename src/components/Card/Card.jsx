import React from "react";
import * as Styled from "./styles";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { BorderedCard } from "../BorderedCard/BorderedCard";

export const Card = ({ children, height }) => {
  return (
    <BorderedCard>
      <Styled.Card
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="transparent-card"
      >
        <Styled.CardInner height={height}>{children}</Styled.CardInner>
      </Styled.Card>
    </BorderedCard>
  );
};
