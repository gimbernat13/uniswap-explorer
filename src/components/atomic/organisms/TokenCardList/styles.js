import { motion } from 'framer-motion';
import styled from 'styled-components';

export const TokenGrid = styled(motion.div)`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 5px;
  height: 70vh;
`;
