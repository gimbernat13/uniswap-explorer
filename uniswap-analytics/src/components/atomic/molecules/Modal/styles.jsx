import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalBox = styled(motion.div)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 30%;
  width: fit-content;
  overflow-y: auto;
  height: fit-content;
  background-color: var(--transparent-black-dark);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  backdrop-filter: blur(5px);
  z-index: 101;
  /* padding: 40px; */
`;
