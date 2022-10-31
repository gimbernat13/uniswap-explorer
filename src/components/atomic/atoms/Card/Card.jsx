import { ThemeContext, themes } from "context/ThemeContext";
import React from "react";
import styled, { css } from "styled-components";
const CARD_VARIANTS = {
  primary: css`
    color: white;
    background-color: var(--transparent-black);
    border: var(--border-ultra-light);
  `,
  transparent: css`
    background-color: transparent !important;
    border: 1px solid transparent;
    box-shadow: none;
  `,
};

const StyledCard = styled.div`
  position: relative;
  display: ${(props) => (props.flex ? "flex" : "block")};
  transition: all 0.3s;
  border-radius: var(--border-radius);
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => props.fitContent && "fit-content"};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.cardBg};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
    /* border: var(--border-ultra-light); */
  }

  ${(props) => {
    console.log("variant ", props.variant);
    return props.variant && CARD_VARIANTS[props.variant];
  }}
`;
const CardInner = styled.div`
  padding: ${(props) => (props.noPadding ? "none" : " 0.8rem")};
`;

export function Card({ variant, children, height, fitContent, noPadding }) {
  return (
    <StyledCard fitContent={fitContent} height={height} variant={variant}>
      <CardInner noPadding={noPadding}>{children}</CardInner>
    </StyledCard>
  );
}
