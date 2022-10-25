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
import { TokensContext } from "context/TokensContext";
import { setTimeFrame } from "context/actionNames";

export default function Chart({ chartData, xKey, yKey, yKey1 }) {
  //  FIXME: create dynamic reverser for token or pair day datas
  var reverseData = [...chartData].reverse();
  const TokenContext = useContext(TokensContext);
  const { dispatch: tokensDispatch, state: tokensState } = TokenContext;

  // For time charts
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };
  const filters = [
    { name: "Price", id: "priceUSD" },
    // { name: "Daily Volume", id: "dailyVolumeUSD" }, //FIXME: Excluded for now until chart fix
    // { name: "Daily Tx's", id: "dailyTxns" },
  ];

  const timeOptions = [
    {
      value: 7,
      name: "Last Week",
    },
    {
      value: 30,
      name: "30 Days",
    },
    {
      value: 100,
      name: "100 Days",
    },
    {
      value: 500,
      name: "500 days",
    },
    {
      value: 1000,
      name: "All Time",
    },
  ];

  const [selectedFilter, setSelectedFilter] = React.useState(filters[0]);
  const [timeFrame, setTimeFrames] = React.useState(timeOptions[4]);

  return (
    <>
      <Styled.ChartGrid>
        <Styled.FilterChartFlex>
          <div>
            {filters.map((filter, i) => {
              return (
                <Button
                  isActive={filter.id === selectedFilter.id}
                  onClick={() => setSelectedFilter(filter)}
                  className={filter.id === selectedFilter.id ? "active" : ""}
                >
                  {filter.name}
                </Button>
              );
            })}
          </div>
          <div>
            <Select
              dispatch={tokensDispatch}
              action={setTimeFrame}
              options={timeOptions}
              selectedFilter={timeFrame}
              setSelectedFilter={setTimeFrames}
            />
          </div>
        </Styled.FilterChartFlex>
        <ResponsiveContainer height={300}>
          <AreaChart data={reverseData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey={selectedFilter.id}
              stroke="#96a0f7"
              fill="url(#color)"
            />
            <XAxis dataKey={getTimeAxis} axisLine={true} tickLine={false} />
            <YAxis
              type="number"
              // domain={["auto", "auto"]}
              datakey={selectedFilter.id}
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
