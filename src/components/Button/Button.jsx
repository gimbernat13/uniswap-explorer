import React from "react";
import * as Styled from "./styles";

export const Button = ({ onClick, children }) => {
  return <Styled.Button onClick={onClick}> {children}</Styled.Button>;
};
