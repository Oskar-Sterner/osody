import styled from 'styled-components';

export const StyledChosenContentText = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 205px;
  overflow: auto;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
