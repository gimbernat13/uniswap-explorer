import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  transition: all 0.2s;
  backdrop-filter: blur(1px);
  border-radius: 1rem;
  background-clip: content-box, border-box;
  /* box-shadow: black 2px 1000px 1px inset; */
  opacity: 0.9;
  background-color: var(--transparent-black);
  border: var(--border-light);

  color: white !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: ${(props) => props.height};
  &:hover {
    border: var(--border);
    box-shadow: rgb(0 0 0 / 24%) 12px 16px 24px, rgb(0 0 0 / 24%) 12px 8px 12px,
      rgb(0 0 0 / 32%) 4px 4px 8px;
  }
`;
export const CardInner = styled(motion.div)`
  padding: 0.8rem;
`;
