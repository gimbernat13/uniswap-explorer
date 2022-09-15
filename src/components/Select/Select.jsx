import React from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  border-radius: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin-right: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(148, 148, 148, 0.317);
`;
const SelectInner = styled.div`
  padding: inherit;
  position: absolute;
  width: inherit;
  top: 65px;
  background-color: black;
  z-index: 3;
  border-radius: 1rem;
  background-color: #183118b8;
  backdrop-filter: 55px;
  backdrop-filter: blur(5px);
`;
const SelectItem = styled.div`
  border-radius: 0.5rem;
  margin: 10px;
  padding: 1rem;

  &:hover {
    filter: brightness(1.3);
    backdrop-filter: blur(5px);
  }
`;
const Flex = styled.div`
  padding: 1rem;
  justify-content: space-between;
  display: flex;
`;

export const Select = ({ options, placeHolder }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState({
    value: "liquidity",
    name: placeHolder,
  });

  function expand() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <StyledSelect
      onFocus={expand}
      onBlur={close}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Flex>
        <div>{selectedItem.name}</div>
        <div>{isOpen ? "🔼" : "🔽"}</div>
      </Flex>
      {isOpen && (
        <SelectInner>
          {options &&
            options.map((option) => {
              return (
                <SelectItem onClick={() => setSelectedItem(option)}>
                  {option.name}
                </SelectItem>
              );
            })}
        </SelectInner>
      )}
    </StyledSelect>
  );
};
