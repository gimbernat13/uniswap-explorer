import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled(motion.div)`
  position: relative;
  display: ${(props) => (props.flex ? "flex" : "block")};
  transition: all 0.3s;
  border-radius: 1rem;
  background-clip: content-box, border-box;
  opacity: 0.9;
  background-color: var(--transparent-black-light);
  background-color: ${(props) =>
    props.transparent
      ? "var(--transparent-black-light)"
      : "var(--transparent-black)"};
  border: ${(props) =>
    props.transparent ? "var(--border-ultra-light)" : "var(--border-light)"};
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: ${(props) => (props.height ? props.height : "100%")};
  &:hover {
    box-shadow: var(--box-shadow-light);
  }
`;
export const CardInner = styled(motion.div)`
  padding: 0.8rem;
`;
