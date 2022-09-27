import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const AggregateGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  gap: 20px;
  color: white;
`;
