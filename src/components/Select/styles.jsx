import styled from "styled-components";

export const Select = styled.div`
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
export const SelectInner = styled.div`
  padding: inherit;
  position: absolute;
  width: inherit;
  top: 65px;
  z-index: 3;
  border-radius: 1rem;
  background-color: #80008054;
  backdrop-filter: blur(5px);
`;
export const SelectItem = styled.div`
  border-radius: 0.5rem;
  margin: 10px;
  padding: 1rem;

  &:hover {
    filter: brightness(1.3);
    backdrop-filter: blur(5px);
  }
`;
export const Flex = styled.div`
  padding: 1rem;
  justify-content: space-between;
  display: flex;
`;
