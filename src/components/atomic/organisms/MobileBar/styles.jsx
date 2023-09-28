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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.2s;
  backdrop-filter: blur(2px);
  z-index: 5;
  opacity: 0;
  display: none;
  
  @media ${deviceQueries.laptop} {
    opacity: 1;
    display: flex; 
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
  justify-content: center;
  gap: 20px;
`;
