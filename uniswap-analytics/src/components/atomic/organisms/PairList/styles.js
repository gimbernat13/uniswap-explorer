import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

export const PoolGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  gap: 10px;
`;
