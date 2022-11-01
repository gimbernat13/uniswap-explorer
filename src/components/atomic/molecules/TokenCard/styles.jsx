import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TokenCard = styled(motion.div)`
  cursor: pointer;
  border-radius: 1rem;
  font-weight: 400;
  display: grid;
  grid-template-columns: 2fr 5fr;
  font-size: 0.8rem;
  align-items: center;
`;
