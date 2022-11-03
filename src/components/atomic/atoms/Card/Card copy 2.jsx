import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled(motion.div)`
  backdrop-filter: blur(1px);
  border-radius: 1rem;
  border: var(--border-thick);
  /* background-clip: content-box, border-box; */
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  width: ${(props) => props.fitcontent && 'fit-content'};
  box-shadow:  ${({ theme }) => `${theme.cardBg} 2px 1000px 2px inset`};
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */
  background-color: ${({ theme }) => theme.cardBg};
  opacity: 0.9;
  font-size: 1rem !important;
  font-weight: 400 !important;
  background-origin: border-box;
      &:hover{
        border:1px solid transparent;

        box-shadow:  ${({ theme }) => `${theme.cardBg} 2px 1000px 2px inset`};
        background-image: linear-gradient(rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)),
          linear-gradient(95.5deg,
      rgba(4, 184, 255, 0.595) 25.82%,
      rgba(47, 107, 210, 0.769) 50.96%,
      rgba(37, 48, 255, 0.609) 75.06%,
      rgba(154, 2, 255, 0.515) 107.66%) 
      
      }

`;
const CardInner = styled.div`
  padding: ${(props) => (props.noPadding ? 'none' : ' 1rem')};
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
