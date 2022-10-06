import { motion } from "framer-motion/dist/framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  padding: 2rem 3rem;
  border-radius: 1rem;
  transition: all 0.2s;
  height: ${(props) => props.height};
  border: 1px solid #9f9f9f3a;
  backdrop-filter: blur(1px);
  background-color: var(--transparent-black);
  overflow-y: scroll;

  border: 1px solid rgba(245, 245, 245, 0.3);
  background-clip: content-box, border-box;
  box-shadow: var(--transparent-black) 2px 1000px 2px inset;
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
`;
export const CardInner = styled(motion.div)`
  /* padding: .5rem; */
`;
