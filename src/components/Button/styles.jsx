import styled from "styled-components";

export const Button = styled.div`
  /* transform: scale(0.8); */
  width: ${(props) => props.width};
  height: fit-content !important;
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid rgba(245, 245, 245, 0.3);
  background-clip: content-box, border-box;
  box-shadow: var(--transparent-black) 2px 1000px 2px inset;
  opacity: 0.9;
  background-color: var(--transparent-black);
  color: white !important;
  font-size: 0.8rem !important;
  font-weight: 400 !important;
  text-align: center;
  margin-right: 7px;

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
  &.active {

    filter: brightness(1.3);
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
