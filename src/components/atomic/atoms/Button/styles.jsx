import styled from "styled-components";

export const Button = styled.div`
  transition: all 0.2s;
  width: ${(props) => props.width};
  height: fit-content !important;
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 11px;
  box-sizing: border-box;
  cursor: pointer;
  border: var(--border-thick);
  background-color: #0000002c;
  display: inline-block;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.cardBg};

  background-color: ${(props) =>
    props.isActive
      ? "var(--accent-purple) "
      : " var(--transparent-black-light)"};

  font-size: 0.8rem !important;
  font-weight: 500 !important;
  text-align: center;
  margin-right: 7px;
  /* box-shadow: var(--box-shadow-light); */
  &:hover {
    filter: brightness(1.3);
  }
  &.active {
    font-weight: 500 !important;
    background-color: var(--accent-purple-dark);
  }
`;
export const ButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
