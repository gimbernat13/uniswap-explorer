import React from "react";
import * as Styled from "./styles";

export const Card = ({
  children,
  height,
  isActive,
  className,
  transparent,
  flex
}) => {
  return (
    <Styled.Card
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className={isActive ? "active " : ""}
      height={height}
      flex={flex}
      transparent={transparent}
      {...className}
    >
      <Styled.CardInner
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        height={height}
      >
        {children}
      </Styled.CardInner>
    </Styled.Card>
  );
};
