import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { PAIR_AGGREGATE } from "./queries";

export const PairAggregate = () => {
  const { pairID } = useParams();

  const { loading, error, data } = useQuery(PAIR_AGGREGATE, {
    variables: { id: pairID },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data)

  return <div>PairAggregate</div>;
};
