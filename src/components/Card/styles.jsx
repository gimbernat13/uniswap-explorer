import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  padding: 3rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
  height: ${(props) => props.height};
  border: 1px solid #9f9f9f3a;
  backdrop-filter: blur(10px);
  background-color: var(--transparent-black);
  overflow-y: scroll;
`;
export const CardInner = styled(motion.div)`
  padding: 1rem;
`;
