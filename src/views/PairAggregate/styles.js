import { motion } from "framer-motion";
import styled from "styled-components";

export const AggregateGrid = styled(motion.div)`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: 4fr 2fr;
  .transparent-card:nth-of-type(1) {
  }
`;
export const AggregateLeft = styled(motion.div)`
  display: grid;
  gap: 10px;
`;
export const AggregateRight = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
`;

export const PairSpecs = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 10px;
`;

export const InfoCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
