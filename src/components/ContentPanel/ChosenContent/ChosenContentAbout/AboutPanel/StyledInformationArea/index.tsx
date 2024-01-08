import styled from 'styled-components';

export const StyledInformationArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 73%;
  column-gap: 2rem;
  box-sizing: border-box;

  @media (max-width: 1010px) {
    flex-direction: column;
  }
`;
