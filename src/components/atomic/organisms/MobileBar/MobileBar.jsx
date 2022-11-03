import React from 'react';
import { UilCoins, UilWaterGlass } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/atomic/atoms/Button/Button';
import * as Styled from './styles';

export function MobileBar() {
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
  return (
    <Styled.MobileBar>
      <Styled.NavLinks>
        {sidebarItems.map((item) => (
          <li key={item.url}>
            <div>
              <Button>
                <NavLink onClick={() => handleChildClick()} to={item.url}>
                  <span>{item.title}</span>
                  {item.icon}
                </NavLink>
              </Button>
            </div>
          </li>
        ))}
      </Styled.NavLinks>
    </Styled.MobileBar>
  );
}
