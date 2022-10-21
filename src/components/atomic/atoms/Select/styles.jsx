import styled from "styled-components";

export const Select = styled.div`
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: rgb(99 99 99 / 20%) 0px 1px 8px 0px;
  margin-right: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  box-shadow: var(--transparent-black) 1px 1000px 1px inset;
  border: 1px solid rgba(245, 245, 245, 0.3);
  font-size: 0.8rem !important;
  width: 150px;

  &:hover {
  }
  img {
    margin-left: 10px;
  }
`;
export const SelectInner = styled.div`
  padding: inherit;
  position: absolute;
  width: inherit;
  top: 45px;
  z-index: 3;
  border-radius: 1rem;
  border: 1px solid rgba(148, 148, 148, 0.317);

  backdrop-filter: blur(1px);
`;
export const SelectItem = styled.div`
  border-radius: 0.5rem;
  margin: 10px;
  padding: 1rem;
`;
export const Flex = styled.div`
  padding: 8px 0.85rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
