import styled from "styled-components";

export const TokenAggregateGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 24px;
  grid-template-columns: 3fr 1fr;
  .transparent-card:nth-of-type(3) {
    /* grid-column: 1/3; */
  }
`;
export const LeftGrid = styled.div`
  display: grid;
  grid-template-columns: auto  2fr;
  gap: 1rem;

  .large {
    grid-column: 1/4;
  }
  :nth-of-type(1) {
  }
  /* background-color: pink; */
`;
