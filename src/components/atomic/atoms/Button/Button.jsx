import React from "react";
import * as Styled from "./styles";

export const Button = ({ onClick, children, width }) => {
  return (
    <Styled.Button width={width} onClick={onClick}>
      caca
      {children}
    </Styled.Button>
  );
};
