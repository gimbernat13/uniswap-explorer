import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  // CartesianGrid,
} from "recharts";
import { Button } from "../Button/styles";
import { FlexContainer } from "../FlexContainer/FlexContainer";

export const BarCharts = ({ chartData, yKey, yValue1, yValue2, xKey }) => {
  // FIXME: Extract to utils
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };

  const [selectedFilter, setSelectedFilter] = React.useState("dailyVolumeUSD");
  const checkButtonActive = (id) => id === selectedFilter;

  const filters = [
    { name: "Daily Volume", id: "dailyVolumeUSD" },
    { name: "Daily Txns", id: "dailyTxns" },
    { name: "Reserve", id: "reserveUSD" },
  ];
  return (
    <>
      <FlexContainer>
        {filters.map((filter, i) => {
          return (
            <Button
              isActive={filter.id === selectedFilter}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.name}
            </Button>
          );
        })}
      </FlexContainer>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey={getTimeAxis} />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey={selectedFilter} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
