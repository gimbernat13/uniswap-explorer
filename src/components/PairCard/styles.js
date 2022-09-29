import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const PoolCard = styled(motion.div)`
  border-radius: 1rem;
  border: var(--border);
  width: 100%;
  cursor: pointer;
  color: lightgray;
`;
export const PoolCardInner = styled(motion.div)`
  padding: 1rem;
`;
