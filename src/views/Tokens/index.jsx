import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import Page from "./Page";
import { TOKENS } from "./queries";
export const Tokens = () => {
  return (
    <div>
      <Page  />
    </div>
  );
};
