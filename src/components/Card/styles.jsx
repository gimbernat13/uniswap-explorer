import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  padding: 0.8rem;
  transition: all 0.2s;
  backdrop-filter: blur(1px);
  border-radius: 1rem;
  border: 1px solid rgb(64, 73, 99);

  background-clip: content-box, border-box;
  box-shadow: black 2px 1000px 1px inset;
  opacity: 0.9;
  background-color: var(--transparent-black);
  color: white !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  background-origin: border-box;
  height: ${(props) => props.height};

  &.active {
    filter: brightness(1.5);
  }

  %.vertical-center {
    display: flex;
    align-items: center;
  }
`;
export const CardInner = styled(motion.div)`
  /* width: 100%; */
`;
