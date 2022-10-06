import styled from "styled-components";

export const Button = styled.div`
  padding: 8px 0.85rem;
  text-decoration: none;
  border-radius: 12px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid transparent;
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
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: rgb(53 55 58) 1px 1000px 1px inset;
  opacity: 0.9;
  background-color: var(--transparent-black);
  color: white !important;
  width: fit-content !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  height: fit-content !important;
`;
