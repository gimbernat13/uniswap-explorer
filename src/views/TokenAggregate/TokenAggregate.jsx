import React from "react";
import { Card } from "../../components/Card/Card";
import { TokenChart } from "../../components/TokenChart/TokenChart";
import { TokenDetails } from "../../components/TokenDetails/TokenDetails";
import { TokenPairs } from "../../components/TokenPairs/TokenPairs";

export const TokenAggregate = () => {
  return (
    <>
      <Card>
        <TokenDetails />
      </Card>
      <Card>
        <TokenPairs />
      </Card>
      <Card>
        <h2>Price USD (100 days) </h2>
        {/* <Select
                dispatch={(e) => setNumberOfDays(e.target.value)}
                placeHolder="Filter By"
                options={dateRangeOptions}
              /> */}
        <TokenChart numberOfItems={50} />
      </Card>
    </>
  );
};
