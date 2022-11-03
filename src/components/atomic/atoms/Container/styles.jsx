import styled from 'styled-components';
import { motion } from 'framer-motion';
import { deviceQueries } from 'config/viewSizes';

export const Container = styled(motion.div)`
  margin-left: var(--sidebar-margin);
  padding: 0 6rem;
  margin-top: 1rem;
  @media ${deviceQueries.laptop} {
    padding: 0 1rem;
    margin-left: 0;
  }
`;
