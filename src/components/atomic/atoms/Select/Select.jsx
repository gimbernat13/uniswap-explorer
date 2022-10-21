import React from "react";
import * as Styled from "./styles";
// import chevron from "../../assets/chevron.png";
import { UilExchange } from "@iconscout/react-unicons";
import { setFilterBy } from "context/actionNames";

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
              src={UilExchange}
              alt=""
            />
          ) : (
            <img
              style={{ height: "10px", transform: "rotate(90deg)" }}
              src={UilExchange}
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
