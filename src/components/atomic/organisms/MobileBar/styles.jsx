import { deviceQueries } from 'config/viewSizes';
import styled from 'styled-components';

export const MobileBar = styled.nav`
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  height: 5vh;
  background-color: ${({ theme }) => theme.sidebarBg};
  width: 100vw;
  padding: 1rem 0;
  color: #fff;
  transition: width 0.5s ease-in-out;
  backdrop-filter: blur(2px);
  transition: all 0.2s;
  opacity: 0;
  display: none;
  box-shadow: var(--box-shadow-light);
  border: var(--border-light);
  cursor: pointer;
  @media ${deviceQueries.laptop} {
    opacity: 1;
    display: block;
  }

  &:hover {
    box-shadow: var(--box-shadow-light);
  }
 
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
