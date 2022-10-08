import React from "react";
import * as Styled from "./styles";

export const BorderedCard = ({ children, variant }) => {
  return (
    <Styled.BorderedCard variant={variant}>{children}</Styled.BorderedCard>
  );
};
