import styled from "styled-components";

export const TokenAggregateGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: 2fr 1fr;
  .transparent-card:nth-of-type(3) {
    /* grid-column: 1/3; */
  }
`;
export const LeftTopGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;

  /* background-color: pink; */
`;
export const LeftGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
`;
export const FlexSpaced = styled.div`
  display: flex;
  justify-content: space-between;
`;
