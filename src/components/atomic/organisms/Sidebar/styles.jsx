import styled from "styled-components";

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 90vh;
  background-color: var(--transparent-black);
  width: 10rem;
  padding: 1.8rem 0.85rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.4s;
  z-index: 5;
  box-shadow: var(--box-shadow-light);

  &:hover {
    box-shadow: var(--box-shadow);
  }
  &.shrink {
    width: 3.8rem;
  }
`;

export const SidebarLink = styled.div``;
