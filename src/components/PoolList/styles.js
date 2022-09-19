import styled from "styled-components";

export const PoolGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 20px;
  color: white;
`;

export const PoolCard = styled.div`
  border-radius: 1rem;
  border: var(--border-color);
  width: 100%;
  cursor: pointer;
`;
export const PoolCardInner = styled.div`
  padding: 1rem;
`;
