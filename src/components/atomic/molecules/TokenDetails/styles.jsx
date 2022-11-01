import { deviceQueries } from "config/viewSizes";
import styled from "styled-components";
export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5px;

  @media ${deviceQueries.laptop} {
    grid-template-columns: auto auto;
  }
  @media ${deviceQueries.tablet} {
    display: block;
  }
  #coingecko {
    transform: scale(1.1);
  }
`;
export const DetailsGridItem = styled.div`
  border-radius: var(--border-radius);
`;
