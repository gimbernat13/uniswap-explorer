/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/atomic/atoms/Button/Button';
import { useOnClickOutside } from 'context/useOnClickOutside';
import {
  UilCoins,
  UilWaterGlass,
  UilMoon,
  UilSun,
} from '@iconscout/react-unicons';
import * as Styled from './styles';

export function Sidebar({ theme, toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidebarItems = [
    // {
    //   title: 'Home',
    //   icon: <UilCoins size={20} />,
    //   url: '/',
    // },
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

          <Button isActive variant="round" onClick={handleToggleTheme}>
            
            {theme === 'dark' ? (
              <UilSun size={15} color="white" />
            ) : (
              <UilMoon size={15} />
              
            )}
          </Button>
          <br />
          {sidebarItems.map((item) => (
            <NavLink key={item.url} onClick={handleChildClick} to={item.url}>
              <Styled.SidebarLink>
                <i className="icon">{item.icon}</i>
                <span className="hide">{item.title}</span>
              </Styled.SidebarLink>
            </NavLink>

          ))}


        </Styled.SidebarLinks>

      </Styled.SidebarInner>
    </Styled.Sidebar>
  );
}
