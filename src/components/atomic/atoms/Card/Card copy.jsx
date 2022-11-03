import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border: ${(props) => (props.transparent ? '1px solid transparent' : ' var(--border-ultra-light)')};
  position: relative;
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  background-color: ${({ theme, transparent }) => (transparent ? 'transparent' : theme.cardBg)};

  transition: all 0.3s;
  border-radius: var(--border-radius);
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => props.fitcontent && 'fit-content'};
  backdrop-filter: blur(5px);

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

`;
const CardInner = styled.div`
  padding: ${(props) => (props.noPadding ? 'none' : ' 0.8rem')};
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
  fitcontent,
  noPadding,
  className,
  transparent,
}) {
  return (
    <StyledCard
      variants={animated}
      initial="hidden"
      animate="show"
      fitcontent={fitcontent}
      height={height}
      variant={variant}
      className={className}
      transparent={transparent}
    >
      <CardInner noPadding={noPadding}>{children}</CardInner>
    </StyledCard>
  );
}
