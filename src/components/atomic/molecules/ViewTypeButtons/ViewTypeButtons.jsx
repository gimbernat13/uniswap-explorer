import { Button } from "components/atomic/atoms/Button/Button";
import React from "react";
import styled from "styled-components";

const ViewButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ViewTypeButtons = ({
  viewTypes,
  viewType,
  handleViewTypeChange,
}) => {
  return (
    <ViewButtons>
      {viewTypes &&
        viewTypes.map((type) => {
          return (
            <Button
              isActive={viewType.id === type.id}
              onClick={() => handleViewTypeChange(type)}
            >
              {type.icon}
            </Button>
          );
        })}
    </ViewButtons>
  );
};
