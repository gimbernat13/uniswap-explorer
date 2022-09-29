import React from "react";
import * as Styled from "./styles";

export const Card = ({ children, height }) => {
  return (
    <Styled.Card>
      <Styled.CardInner height={height}>{children}</Styled.CardInner>
    </Styled.Card>
  );
};
