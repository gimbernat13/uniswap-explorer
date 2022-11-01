import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";
const CARD_VARIANTS = {
  primary: css`
    border: var(--border-ultra-light) !important;
  `,
  transparent: css`
    background-color: transparent !important;
    border: 1px solid transparent !important;
    box-shadow: none;
  `,
};
const StyledCard = styled(motion.div)`
  position: relative;
  display: ${(props) => (props.flex ? "flex" : "block")};
  transition: all 0.3s;
  border-radius: var(--border-radius);
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => props.fitContent && "fit-content"};
  border: var(--border-ultra-light);
  color: ${({ theme }) => theme.text};
  backdrop-filter: blur(5px);
  background-color: ${({ theme }) => theme.cardBg};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  ${(props) => {
    return props.variant && CARD_VARIANTS[props.variant];
  }}
`;
const CardInner = styled.div`
  padding: ${(props) => (props.noPadding ? "none" : " 0.8rem")};
`;

const animated = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export function Card({
  variant,
  children,
  height,
  fitContent,
  noPadding,
  className,
}) {
  return (
    <StyledCard
      variants={animated}
      initial="hidden"
      animate="show"
      fitContent={fitContent}
      height={height}
      variant={variant}
      className={className}
    >
      <CardInner noPadding={noPadding}>{children}</CardInner>
    </StyledCard>
  );
}
