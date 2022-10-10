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
import { Button } from "../Button/styles";

export const BarCharts = ({ chartData }) => {
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
      <br />
      <br />
      <br />
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey={getTimeAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          rgba(15, 53, 255, 0.3)
          <Bar dataKey={selectedFilter} fill="#36d7b7" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
