import { motion } from "framer-motion";
import styled from "styled-components";

export const ChartGrid = styled(motion.div)`
  /* background-color: pink; */
  display: grid;
  gap: 1rem;
`;

export const FilterChartFlex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;
