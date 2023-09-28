import styled from 'styled-components';

export const Select = styled.div`
  border: ${({ theme }) => theme.borderLight};
  border-radius: var(--border-radius);
  text-align: center;
  margin-right: 0.5rem;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  font-size: 0.8rem !important;
  width: fit-content;
  background-color: ${({ theme }) => theme.cardBg};
  img {
    margin-left: 10px;
  }
`;
export const SelectInner = styled.div`
  padding: inherit;
  position: absolute;
  width: inherit;
  top: 45px;
  z-index: 3;
  border-radius: 1rem;
  border: ${({ theme }) => theme.borderLight};
  background-color: ${({ theme }) => theme.cardBg};
  backdrop-filter: blur(1px);
 
  &:hover {
    filter: brightness(1.3);
    background: ${({ theme }) => ` linear-gradient(${theme.cardBg}, ${theme.cardBg}) padding-box,
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(
          95.5deg,
          rgba(4, 184, 255, 0.595) 25.82%,
          rgba(47, 107, 210, 0.769) 50.96%,
          rgba(37, 48, 255, 0.609) 75.06%,
          rgba(154, 2, 255, 0.515) 107.66%
        )
        border-box`};
  }

`;
export const SelectItem = styled.div`
  border-radius: 0.5rem;
  margin: 10px;
  padding: 1rem;
  &:hover{
    background: ${({ theme }) => theme.sidebarBg};
}
`;
export const Flex = styled.div`
  padding: 8px 0.85rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
