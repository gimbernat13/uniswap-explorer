import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/atomic/atoms/Button/Button';
import { useOnClickOutside } from 'context/useOnClickOutside';
import {
  UilCoins,
  UilWaterGlass,
  UilMoon,
  UilSun,
  UilNerd,
} from '@iconscout/react-unicons';
import * as Styled from './styles';

export function Sidebar({ theme, toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidebarItems = [
    {
      title: 'Tokens',
      icon: <UilCoins size={20} />,
      url: '/tokens',
    },
    {
      title: 'Pairs',
      icon: <UilWaterGlass size={20} />,
      url: '/pairs',
    },
  ];

  function handleChildClick(e) {
    e.stopPropagation();
  }
  function handleToggleTheme(e) {
    e.stopPropagation();
    toggleTheme();
  }
  const ref = useRef();
  useOnClickOutside(ref, () => setIsSidebarOpen(false));
  return (
    <Styled.Sidebar
      ref={ref}
      onClick={toggleSidebarOpen}
      className={isSidebarOpen ? 'expanded' : 'shrink'}
    >
      <Styled.SidebarInner>
        <Styled.SidebarLinks>
          <UilNerd />
          <Styled.SidebarLink>
            <h2 className="hide"> Explorer</h2>
          </Styled.SidebarLink>
          {sidebarItems.map((item) => (
            <NavLink key={item.url} onClick={handleChildClick} to={item.url}>
              <Styled.SidebarLink>
                <li className="icon">{item.icon}</li>
                <span className="hide">{item.title}</span>
              </Styled.SidebarLink>
            </NavLink>
          ))}
        </Styled.SidebarLinks>
        <Button onClick={handleToggleTheme}>
          {theme === 'dark' ? (
            <UilSun size={15} color="white" />
          ) : (
            <UilMoon size={15} />
          )}
        </Button>
      </Styled.SidebarInner>
    </Styled.Sidebar>
  );
}
