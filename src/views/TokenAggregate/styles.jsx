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
export const FlexSpacedV = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;
export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
`;
export const DetailsGridItem = styled.div`
  border-radius: var(--border-radius);
`;
export const RightGrid = styled.div`
  display: grid;
  gap: 10px;
`;
