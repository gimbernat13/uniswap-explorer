import React from "react";
import { BarLoader } from "react-spinners";
import * as Styled from "./styles";
export const Loader = () => {
  return (
    <Styled.Loader>
      <BarLoader color="#828bdd" />
    </Styled.Loader>
  );
};
