import React from 'react';
import { BarLoader } from 'react-spinners';
import * as Styled from './styles';

export function Loader() {
  return (
    <Styled.Loader>
      <BarLoader color="#828bdd" />
    </Styled.Loader>
  );
}
