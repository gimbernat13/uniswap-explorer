import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const MobileBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5vh;
  background-color: var(--transparent-black-dark);
  width: 100vw;
  padding: 1rem 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  opacity: 0;

  /* box-shadow: var(--box-shadow-light); */
  cursor: pointer;
  @media ${deviceQueries.laptop} {
    opacity: 1;
  }

  &:hover {
    box-shadow: var(--box-shadow-light);
  }
  &.shrink {
    width: 3rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
`;
