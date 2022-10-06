import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const TokenCard = styled(motion.div)`
  cursor: pointer;
  border: 2px solid transparent;

  opacity: 0.9;
  background-color: var(--transparent-black) !important;
  &:hover {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(
        95.5deg,
        rgba(15, 53, 255, 0.3) 12.82%,
        rgba(255, 72, 181, 0.3) 41.96%,
        rgba(15, 53, 255, 0.08) 75.06%,
        rgba(15, 53, 255, 0.11) 107.66%
      );
    background-origin: border-box;
    /* background-clip: content-box, border-box; */
    box-shadow: rgba(15, 51, 255, 0.803) 1px 1000px 1px inset;
  }
`;
