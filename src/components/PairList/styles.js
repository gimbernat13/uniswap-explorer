import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const PoolGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-content: center;
  gap: 20px;
  color: white;
`;
