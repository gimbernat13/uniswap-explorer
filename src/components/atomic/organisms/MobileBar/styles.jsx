import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const MobileBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90vh;
  background-color: var(--transparent-black-dark);
  width: 100%;
  padding: 1.8rem 0.85rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.4s;
  z-index: 5;
  /* box-shadow: var(--box-shadow-light); */
  cursor: pointer;
  @media ${deviceQueries.laptop} {
    display: none;
  }

  &:hover {
    box-shadow: var(--box-shadow-light);
  }
  &.shrink {
    width: 3rem;
  }
`;

export const SidebarLink = styled.div``;
