import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${(theme) => theme.cardBg};
  width: 10rem;
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
    box-shadow: var(--box-shadow-light);
  }
  &.shrink {
    width: 5rem;
    .hide {
      color: green;
      opacity: 0;
    }
  }
`;
export const SidebarInner = styled.div`
  padding: 1rem 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  button {
    align-items: center;
    margin-left: 5px;
  }
  /* justify-content: space-between; */
`;

export const SidebarLink = styled.div`
  display: flex;
  border-radius: var(--border-radius);
  /* padding: 10px 8px; */
  margin: 10px;
  align-items: center;
  gap: 10px;
  margin-left: 14px;
`;
export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
