import styled from "styled-components";

export const Sidebar = styled.div`
  cursor: pointer;
  transition: all 0.4s;
  background: #141414;
  /* border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  width: ${(props) => props.width};
  z-index: 6;
  position: fixed;
  box-shadow: 0px 4px 30px 0px #131313;
  left: 0;
  height: 100%;

  ul {
    display: grid;
    /* align-items: center; */
    justify-content: center;
    gap: 20px;
  }
`;
