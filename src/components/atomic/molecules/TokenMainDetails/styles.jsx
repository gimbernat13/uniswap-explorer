import styled from "styled-components";

export const FlexSpacedV = styled.div`
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DetailLinks = styled.div`
position: absolute;
bottom: 10%;
right: 10%;
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }

  img {
    height: 20px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0; // Remove margin from the last image
    }
  }
`;
