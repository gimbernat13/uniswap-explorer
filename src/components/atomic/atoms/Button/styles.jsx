import styled from "styled-components";

export const Button = styled.div`
  /* transform: scale(0.8); */
  transition: all 0.2s;
  width: ${(props) => props.width};
  height: fit-content !important;
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 11px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid rgba(245, 245, 245, 0.3);
  /* border: 1px solid transparent; */

  opacity: 0.9;
  background-color: ${(props) =>
    props.isActive ? "var(--main-color) " : " var(--transparent-black)"};
  /* background-color: var(--transparent-black); */
  /* background-color: var(--main-color); */
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
