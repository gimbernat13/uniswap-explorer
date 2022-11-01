import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";

export const TokenAggregateGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 5px;
  grid-template-columns: 3fr 1fr;

  @media ${deviceQueries.laptopM} {
    display: block;
  }
  .transparent-card:nth-of-type(3) {
  }
`;
export const LeftTopGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  @media ${deviceQueries.laptopM} {
    grid-template-columns: auto;
  }
`;
export const Chart = styled.div`
  @media ${deviceQueries.laptopM} {
    display: none;
  }
`;
export const LeftGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 5px;
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

export const RightGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
`;
