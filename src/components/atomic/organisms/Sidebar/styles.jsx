import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarBg};
  width: 15rem;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.2s;
  z-index: 5;
  box-shadow: var(--box-shadow-light);
  cursor: pointer;
  @media ${deviceQueries.laptop} {
    display: none;
  }
  &:hover {
box-shadow: var(--box-shadow-light)
  }
  &.shrink {
    width: 4rem;
    .hide {
      color: green;
      opacity: 0;
    }
  }
  .active {
    border-radius: var(--border-radius) !important;
  }
`;
export const SidebarInner = styled.div`
  padding: 1rem 0.7rem;
  height: 96%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const SidebarLink = styled.li`
  display: flex;
  padding: 0.5rem 0.5rem;
  align-items: center;
  gap: 10px;
  margin-left: 4px;
`;
export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
