import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;

  @media ${deviceQueries.laptop} {
    grid-template-columns: auto auto;
  }
`;
export const DetailsGridItem = styled.div`
  border-radius: var(--border-radius);
`;
