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
  console.log("chart data ", chartData)
  // FIXME: Extract to utils
  const getTimeAxis = (data) => {
    const milliseconds = data.date * 1000;
    const newDate = new Date(milliseconds);
    const formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
  };
  const convertedData = chartData.map(item => ({
    ...item,
    dailyVolumeUSD: +item.dailyVolumeUSD, // using unary plus to convert to number
    dailyTxns: +item.dailyTxns, // using unary plus to convert to number
    reserveUSD: +item.reserveUSD, // using unary plus to convert to number
  }));


  var reverseData = [...convertedData].reverse();
  const [selectedFilter, setSelectedFilter] = React.useState("dailyVolumeUSD");
  const filters = [
    { name: "Daily Volume", id: "dailyVolumeUSD" },
    { name: "Daily Txns", id: "dailyTxns" },
    { name: "Reserve", id: "reserveUSD" },
  ];

  function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div style={{ padding: '10px', border: '1px solid #ccc' }}>
          <p>{`${label} : ${payload[0].name}`}</p>
          <p>{`Value: ${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  }
  return (
    <>
      <Styled.ChartGrid>
        <Styled.ButtonsFlex>
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
        </Styled.ButtonsFlex>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={reverseData}
          >
            <XAxis dataKey={getTimeAxis} />
            <YAxis width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey={selectedFilter} fill="var(--accent-purple)" />
          </BarChart>
        </ResponsiveContainer>
      </Styled.ChartGrid>
    </>
  );
};
