import styled from "styled-components";

export const TokenAggregateGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 35%;
  .transparent-card:nth-of-type(3) {
    grid-column: 1/3;
  }
`;
