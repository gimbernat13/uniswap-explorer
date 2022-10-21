import React from "react";
import { UilTable } from "@iconscout/react-unicons";
import { UilListUl } from "@iconscout/react-unicons";
import { Button } from "components/atomic/atoms/Button/Button";

export const useViewType = () => {
  const viewTypes = [
    { id: "table", text: "Table", icon: <UilListUl size={15} /> },
    { id: "cards", text: "Cards", icon: <UilTable size={15} /> },
  ];

  const [viewType, setViewType] = React.useState(viewTypes[0]);
  const handleViewTypeChange = (type) => {
    setViewType(type);
  };

  return { viewTypes, viewType, handleViewTypeChange };
};
