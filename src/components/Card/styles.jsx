import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  padding: .8rem;

  transition: all 0.2s;
  height: ${(props) => props.height};
  overflow-y: scroll;
`;
export const CardInner = styled(motion.div)``;
