import styled, { css } from 'styled-components';

const BUTTON_VARIANTS = {
  thick: css`
    box-shadow: none;
  `,
  round: css`
    border-radius: 500px;
  `,
  noShadow: css`
    box-shadow: none;
  `,
};
export const Button = styled.button`
    color: ${({ theme }) => theme.text};

  width: ${(props) => props.width};
  background: ${({
    theme, isActive,
  }) => isActive && ` linear-gradient(${theme.cardBg}, ${theme.cardBg}) padding-box,
      linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(
          95.5deg,
          rgba(4, 184, 255, 0.595) 25.82%,
          rgba(47, 107, 210, 0.769) 50.96%,
          rgba(37, 48, 255, 0.609) 75.06%,
          rgba(154, 2, 255, 0.515) 107.66%
        )
        border-box`};
    
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  position: relative;
  z-index: 2;
  transition: all 0.2s;
  height: fit-content !important;
  padding: 8px 0.85rem;
  box-sizing: border-box;
  cursor: pointer;
  border: ${({ theme }) => theme.borderLight};
  display: inline-block;
  opacity: 0.9;
  font-weight : 500;

  text-align: center;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.boxShadow};
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
  ${(props) => props.variant && BUTTON_VARIANTS[props.variant]}

`;

export const ButtonInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
