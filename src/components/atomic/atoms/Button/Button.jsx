import React from "react";
import * as Styled from "./styles";

export const Button = ({ onClick, children, width, isActive }) => {
  return (
    <Styled.Button isActive={isActive} width={width} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};
