import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 96vh;
  background-color: ${({ theme }) => theme.cardBg};
  width: 10rem;
  padding: 1rem 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.4s;
  z-index: 5;
  box-shadow: var(--box-shadow-light);
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

export const SidebarLinksCentered = styled.div``;
