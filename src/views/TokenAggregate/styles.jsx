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
  grid-template-rows: 1fr auto;
  gap: 1rem;
  /* background-color: pink; */
`;
