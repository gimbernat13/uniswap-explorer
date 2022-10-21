import { motion } from "framer-motion";
import styled from "styled-components";

export const PoolCard = styled(motion.div)`
  border-radius: var(--border-radius);
  width: 100%;
  cursor: pointer;
  position: relative;
`;
export const PoolCardInner = styled(motion.div)``;
export const TradeButton = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
`;
