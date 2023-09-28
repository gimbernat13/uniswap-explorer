import React from "react";
import * as Styled from "./styles";

export const Button = ({ onClick, children, width, isActive }) => {
  return (
    <Styled.Button
      width={width}
      onClick={onClick}
      isActive={isActive}
    >
      <Styled.ButtonInner>{children}</Styled.ButtonInner>
    </Styled.Button>
  );
};
 