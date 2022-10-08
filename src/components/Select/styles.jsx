import styled from "styled-components";

export const Select = styled.div`
  border-radius: 1rem;
  text-align: center;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin-right: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  box-shadow: var(--transparent-black) 2px 1000px 2px inset;
  border: 2px solid rgba(245, 245, 245, 0.3);
  &:hover {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        95.5deg,
        rgba(15, 53, 255, 0.3) 12.82%,
        rgba(255, 72, 181, 0.3) 41.96%,
        rgba(15, 53, 255, 0.08) 75.06%,
        rgba(15, 53, 255, 0.11) 107.66%
      );
  }
  img {
    margin-left: 10px;
  }
`;
export const SelectInner = styled.div`
  padding: inherit;
  position: absolute;
  width: inherit;
  top: 65px;
  z-index: 3;
  border-radius: 1rem;
  background-color: #000000b2;
  border: 2px solid rgba(148, 148, 148, 0.317);

  backdrop-filter: blur(2px);
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
`;
