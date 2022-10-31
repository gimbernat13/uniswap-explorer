import { Button } from "components/atomic/atoms/Button/Button";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import * as Styled from "./styles";

export const BarCharts = ({ chartData }) => {
  // FIXME: Extract to utils
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };
  var reverseData = [...chartData].reverse();
  const [selectedFilter, setSelectedFilter] = React.useState("dailyVolumeUSD");
  const filters = [
    { name: "Daily Volume", id: "dailyVolumeUSD" },
    { name: "Daily Txns", id: "dailyTxns" },
    { name: "Reserve", id: "reserveUSD" },
  ];
  return (
    <>
      <Styled.ChartGrid>
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

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            margin={{
              top: 30,
            }}
            data={reverseData}
          >
            <XAxis dataKey={getTimeAxis} />
            <YAxis width={80} />
            <Tooltip />
            <Legend />
            rgba(15, 53, 255, 0.3)
            <Bar dataKey={selectedFilter} fill="#98a1fa" />
          </BarChart>
        </ResponsiveContainer>
      </Styled.ChartGrid>
    </>
  );
};
