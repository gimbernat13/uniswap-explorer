import styled from "styled-components";

export const TokenAggregateGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  .transparent-card:nth-of-type(3) {
    /* grid-column: 1/3; */
  }
`;
