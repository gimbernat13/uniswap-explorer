import styled from "styled-components";

export const Button = styled.div`
  border-radius: 1rem;
  min-width: 100px;
  max-width: 200px;

  background-color: ${(props) =>
    props.isActive ? " rgba(30, 96, 118, 0.732);" : "black"};
  /* color: ${(props) => (props.isActive ? "black" : "white")}; */

  text-align: center;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin: 1rem 0;
  margin-right: 0.5rem;

  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(148, 148, 148, 0.317);
  padding: 0.5rem;
`;
