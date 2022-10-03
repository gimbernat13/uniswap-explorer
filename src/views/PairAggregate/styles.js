import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const AggregateGrid = styled(motion.div)`
  display: grid;
  grid-template-columns:
    2fr
    1fr;
  gap: 20px;
  color: white;

  .transparent-card:nth-of-type(1) {
  }
`;
export const AggregateLeft = styled(motion.div)`
  display: grid;
  gap: 20px;
`;
