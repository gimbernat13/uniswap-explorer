import styled from "styled-components";

export const Sidebar = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  background: var(--transparent-black);
  /* border-right: 2px solid rgba(245, 245, 245, 0.095); */

  /* border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem; */
  backdrop-filter: blur(2px);
  width: ${(props) => props.width};
  z-index: 6;
  position: fixed;
  /* box-shadow: 0px 4px 30px 0px #131313; */

  top: 0;
  left: 0;
  height: 100%;
  transition: all 0.4s;
  padding: 0 0.5rem;

  &:hover {
    box-shadow: rgb(0 0 0 / 24%) 12px 16px 24px, rgb(0 0 0 / 24%) 12px 8px 12px,
      rgb(0 0 0 / 32%) 4px 4px 8px;
  }
  ul {
    display: grid;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 20px;
    transition: all 0.4s;

    li {
      transition: all 0.4s;
      width: 100%;
      display: flex;
      /* text-align: center; */
      justify-content: center;
      align-items: center;
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;
