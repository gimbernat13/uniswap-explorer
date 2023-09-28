import styled from "styled-components";

export const FlexSpacedV = styled.div`
flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 0;
  background-color: blue;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DetailLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

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
