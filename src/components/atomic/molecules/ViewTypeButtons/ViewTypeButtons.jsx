import { Button } from "components/atomic/atoms/Button/Button";
import React from "react";

export const ViewTypeButtons = ({
  viewTypes,
  viewType,
  handleViewTypeChange,
}) => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};
