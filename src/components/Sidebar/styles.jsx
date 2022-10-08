import styled from "styled-components";

export const Sidebar = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  background: var(--transparent-black);
  border-right: 2px solid rgba(245, 245, 245, 0.095);

  /* border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  backdrop-filter: blur(2px);
  width: ${(props) => props.width};
  z-index: 6;
  position: fixed;
  box-shadow: 0px 4px 30px 0px #131313;
  top: 0;
  left: 0;
  height: 100%;
  transition: all 0.4s;
  padding: 0 0.5rem;
  

  ul {
    display: grid;
    /* align-items: center; */
    justify-content: center;
    gap: 20px;
    transition: all 0.4s;

    li {
      transition: all 0.4s;
      width: 100%;
      display: flex;

      /* justify-content: center; */
      align-items: center;
    }
  }
`;
