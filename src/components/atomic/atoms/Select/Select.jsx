import React, { useRef } from "react";
import * as Styled from "./styles";
import { UilAngleUp, UilAngleDown } from "@iconscout/react-unicons";
import { useOnClickOutside } from "context/useOnClickOutside";

export const Select = ({ options, dispatch, action, state, value }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  function expand() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const ref = useRef();
  useOnClickOutside(ref, () => close());
  console.log(state);
  return (
    <Styled.Select
      ref={ref}
      onFocus={expand}
      onBlur={close}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Styled.Flex>
        {value.name}
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
                    dispatch({ type: action, payload: option });
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
