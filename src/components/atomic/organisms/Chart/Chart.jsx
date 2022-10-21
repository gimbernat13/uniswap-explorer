import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import React from "react";
import { Button } from "components/atomic/atoms/Button/Button";
import * as Styled from "./styles";
import { Select } from "components/atomic/atoms/Select/Select";

export default function Chart({ chartData, xKey, yKey, yKey1 }) {
  //  FIXME: create dynamic reverser for token or pair day datas
  // const reverseData = [...chartData.reverse()];
  var reverseData = [...chartData].reverse();

  // For time charts
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };
  const [selectedFilter, setSelectedFilter] = React.useState("priceUSD");

  const filters = [
    { name: "Price", id: "priceUSD" },
    { name: "Daily Volume", id: "dailyVolumeUSD" }, //FIXME: Excluded for now until chart fix
    { name: "Daily Tx's", id: "dailyTxns" },
  ];
  const timeOptions = [
    {
      value: 30,
      name: "30 Days",
    },
    {
      value: 100,
      name: "100 Days",
    },
    {
      value: 1000,
      name: "All Time",
    },
  ];

  return (
    <>
      <Styled.ChartGrid>
        <Styled.FilterChartFlex>
          <div>
            {filters.map((filter, i) => {
              return (
                <Button
                  isActive={filter.id === selectedFilter}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={filter.id === selectedFilter ? "active" : ""}
                >
                  {filter.name}
                </Button>
              );
            })}
          </div>
          <div>
            <Select placeHolder="Time" options={timeOptions} />
          </div>
        </Styled.FilterChartFlex>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={reverseData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2c88ff" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2c88ff" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey={selectedFilter}
              stroke="#96a0f7"
              fill="url(#color)"
            />
            <XAxis dataKey={getTimeAxis} axisLine={true} tickLine={false} />
            <YAxis
              type="number"
              domain={["auto", "auto"]}
              datakey={selectedFilter}
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
