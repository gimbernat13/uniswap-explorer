import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";
export const TxTable = styled(motion.table)`
    table-layout: fixed;
`;
export const TxRow = styled(motion.tr)`
  border-radius: 1rem;
  border: var(--border);
`;
