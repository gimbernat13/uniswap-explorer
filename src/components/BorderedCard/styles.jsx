import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const BorderedCard = styled(motion.div)`
  transition: all 1s;
  backdrop-filter: blur(1px);
  border-radius: 1rem;
  border: 2px solid rgba(245, 245, 245, 0.241);
  background-clip: content-box, border-box;
  box-shadow: black 2px 1000px 2px inset;
  opacity: 0.9;
  background-color: var(--transparent-black);
  color: white !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  background-origin: border-box;
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
  }
  &:hover {
    filter: brightness(1.3);
  }
`;
