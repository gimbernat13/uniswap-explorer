import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.text};
  width: ${(props) => props.width};
  position: relative;
  z-index: 2;
  transition: all 0.2s;
  height: fit-content !important;
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 11px;
  box-sizing: border-box;
  cursor: pointer;
  border: var(--border-thick);
  display: inline-block;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.cardBg};
  font-size: 0.8rem !important;
  font-weight: 500 !important;
  text-align: center;
  margin-right: 7px;
  /* box-shadow: var(--box-shadow-light); */
  &:hover {
    filter: brightness(1.3);
  }
`;
export const ButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
