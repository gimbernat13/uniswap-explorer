import React from "react";
import { setFilterBy } from "../../context/actionNames";
import * as Styled from "./styles";
import chevron from "../../assets/chevron.png";

export const Select = ({ options, placeHolder, dispatch, action }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    value: "tradeVolumeUSD",
    name: placeHolder,
  });

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
        <div>{selectedItem.name}</div>
        <div>
          {isOpen ? (
            <img
              style={{ height: "10px", transform: "rotate(270deg)" }}
              src={chevron}
              alt=""
            />
          ) : (
            <img
              style={{ height: "10px", transform: "rotate(90deg)" }}
              src={chevron}
              alt=""
            />
          )}{" "}
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
                    setSelectedItem(option);
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
