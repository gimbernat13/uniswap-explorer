import React from 'react';
import * as Styled from './styles';

export function Button({
  onClick, children, width, isActive, variant,
}) {
  return (
    <Styled.Button
      width={width}
      onClick={onClick}
      isActive={isActive}
      variant={variant}
    >
      <Styled.ButtonInner>{children}</Styled.ButtonInner>
    </Styled.Button>
  );
}
