import { motion } from 'framer-motion';
import React from 'react';
import styled, { css } from 'styled-components';

const animated = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const CARD_VARIANTS = {
  primary: css`
  border: ${({ theme }) => theme.borderLight}; 
  `,

  cool: css`
  background: ${({
    theme,
  }) => ` linear-gradient(${theme.cardBg}, ${theme.cardBg}) padding-box,
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(
          95.5deg,
          rgba(4, 184, 255, 0.595) 25.82%,
          rgba(47, 107, 210, 0.769) 50.96%,
          rgba(37, 48, 255, 0.609) 75.06%,
          rgba(154, 2, 255, 0.515) 107.66%
        )
        border-box`};
    }
  `,
  transparent: css`
  `,
  noShadow: css`
    box-shadow: none;
  `,
  gradient: css`
    &:hover {
      background: ${({
    theme,
  }) => ` linear-gradient(${theme.cardBg}, ${theme.cardBg}) padding-box,
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(
          95.5deg,
          rgba(4, 184, 255, 0.595) 25.82%,
          rgba(47, 107, 210, 0.769) 50.96%,
          rgba(37, 48, 255, 0.609) 75.06%,
          rgba(154, 2, 255, 0.515) 107.66%
        )
        border-box`};
    }
  `,
};
const StyledCard = styled(motion.div)`
  backdrop-filter: blur(1px);
  border-radius: 1rem;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.cardBg};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  width: ${(props) => props.fitcontent && 'fit-content'};
  box-shadow: ${({ theme }) => theme.boxShadow};
  opacity: 0.9;
  font-size: 1rem !important;
  font-weight: 400 !important;
  ${(props) => props.variant && CARD_VARIANTS[props.variant]}
`;
const CardInner = styled.div`
  padding: ${(props) => (props.noPadding ? 'none' : ' 1rem')};
`;

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
