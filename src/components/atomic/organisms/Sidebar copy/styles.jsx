import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 90vh;
  background-color: ${(theme) => theme.cardBg};
  width: 10rem;
  padding: 1.8rem 0.85rem;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.2s;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--box-shadow-light);
  cursor: pointer;
  @media ${deviceQueries.laptop} {
    display: none;
  }

  &:hover {
    box-shadow: var(--box-shadow-light);
  }
  &.shrink {
    width: 3.8rem;
  }
`;

export const SidebarLinksCentered = styled.div``;
