import styled from "styled-components";

export const Button = styled.div`
  /* transform: scale(0.8); */
  transition: all 0.2s;
  width: ${(props) => props.width};
  height: fit-content !important;
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 11px;
  box-sizing: border-box;
  cursor: pointer;
  /* border: var(--border-ultra-light); */
  /* border: ${(props) =>
    props.isActive ? "1px solid transparent" : "var(--border-ultra-light)"}; */
  border: var(--border-ultra-light);
  background-color: #0000002c;
  display: inline-block;
  opacity: 0.9;
  background-color: ${(props) =>
    props.isActive ? "var(--main-color) " : " var(--transparent-black-light)"};

  color: white !important;
  font-size: 0.8rem !important;
  font-weight: 400 !important;
  text-align: center;
  margin-right: 7px;

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
