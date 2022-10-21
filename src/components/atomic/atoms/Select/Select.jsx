import React from "react";
import * as Styled from "./styles";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";

export const Select = ({
  options,
  placeHolder,
  dispatch,
  action,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function expand() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <Styled.Select
      onFocus={expand}
      onBlur={close}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Styled.Flex>
        <div>{selectedFilter.name}</div>
        <div>
          {isOpen ? <UilAngleDown size={16} /> : <UilAngleUp size={16} />}
        </div>
      </Styled.Flex>
      {isOpen && (
        <Styled.SelectInner>
          {options &&
            options.map((option, i) => {
              return (
                <Styled.SelectItem
                  key={option + i}
                  onClick={() => {
                    setSelectedFilter(option);
                    dispatch({ type: action, payload: option.value });
                  }}
                >
                  {option.name}
                </Styled.SelectItem>
              );
            })}
        </Styled.SelectInner>
      )}
    </Styled.Select>
  );
};
