import React from 'react';
import * as Styled from './styles';

export function Button({
  onClick, children, width, isActive,
}) {
  return (
    <Styled.Button
      className={isActive ? 'active' : ''}
      width={width}
      onClick={onClick}
      isActive={isActive}
    >
      <Styled.ButtonInner>{children}</Styled.ButtonInner>
    </Styled.Button>
  );
}
