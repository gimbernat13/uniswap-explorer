import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20vh;
  align-items: center;
`;

export const NavFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.div`
  border-radius: 1rem;
  min-width: 100px;
  text-align: center;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin-right: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  border: 2px solid rgba(148, 148, 148, 0.317);
  padding: .5rem;
`;

export const ActiveLink = styled.div`
  background-color: blue;
`;
