import React from "react";
import * as Styled from "./styles";

export const Card = ({
  children,
  height,
  isActive,
  className,
  transparent,
  flex,
  noPadding,
  fitContent,
}) => {
  return (
    <Styled.Card
      fitContent={fitContent}
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
        noPadding={noPadding}
      >
        {children}
      </Styled.CardInner>
    </Styled.Card>
  );
};
