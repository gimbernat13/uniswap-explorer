import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const AggregateGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: 6fr 3fr;
  .transparent-card:nth-of-type(1) {
  }
`;
export const AggregateLeft = styled(motion.div)`
  display: grid;
  gap: 20px;
`;

export const PairSpecs = styled(motion.div)`
  display: grid;
  grid-template-columns:  2fr 2fr 3fr;
  gap: 20px;
`;
