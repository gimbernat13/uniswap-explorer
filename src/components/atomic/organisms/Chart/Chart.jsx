import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import React, { useContext } from "react";
import { Button } from "components/atomic/atoms/Button/Button";
import * as Styled from "./styles";
import { Select } from "components/atomic/atoms/Select/Select";
import {
  timeOptions,
  tokenFilters,
  TokensContext,
} from "context/TokensContext";
import { setFilterBy, setTimeFrame } from "context/actionNames";

export default function Chart({ chartData, xKey, yKey, yKey1 }) {
  //  FIXME: create dynamic reverser for token or pair day datas
  const convertedData = chartData.map(item => ({
    ...item,
    // assuming tokensState.filterBy.id could be 'dailyVolumeUSD', 'dailyTxns', or 'reserveUSD'
    dailyVolumeUSD: Number(item.dailyVolumeUSD), // using Number() to convert to number
    dailyTxns: Number(item.dailyTxns), // using Number() to convert to number
    reserveUSD: Number(item.reserveUSD), // using Number() to convert to number
  }));

  var reverseData = [...convertedData].reverse();
  const TokenContext = useContext(TokensContext);
  const { dispatch: tokensDispatch, state: tokensState } = TokenContext;

  // For time charts
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  return (
    <>
      <Styled.ChartGrid>
        <Styled.FilterChartFlex>
          <Styled.FilterButtons>
            {tokenFilters.map((filter, i) => {
              return (
                <Button
                  isActive={filter.id === tokensState.filterBy.id}
                  onClick={() => {
                    tokensDispatch({ type: setFilterBy, payload: filter });
                  }}
                  className={
                    filter.id === tokensState.filterBy.id ? "active" : ""
                  }
                >
                  {filter.name}
                </Button>
              );
            })}
          </Styled.FilterButtons>
          {/* <div>
            <Select
              dispatch={tokensDispatch}
              action={setTimeFrame}
              options={timeOptions}
              state={tokensState}
              value={tokensState.timeFrame}
            />
          </div> */}
        </Styled.FilterChartFlex>
        <ResponsiveContainer height={300}>
          <AreaChart
            margin={{
              top: 30,
            }}
            data={reverseData}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey={tokensState.filterBy.id}
              stroke="#96a0f7"
              fill="url(#color)"
            />
            <XAxis dataKey={getTimeAxis} axisLine={true} tickLine={false} />
            <YAxis
              width={80}
              type="number"
              // domain={["auto", "auto"]}
              dataKey={tokensState.filterBy.id}
              axisLine={false}
              tickLine={false}
              tickCount={100}
            />{" "}
            <Tooltip />
            {/* <CartesianGrid opacity={0.1} vertical={false} /> */}
          </AreaChart>
        </ResponsiveContainer>
      </Styled.ChartGrid>
    </>
  );
}
