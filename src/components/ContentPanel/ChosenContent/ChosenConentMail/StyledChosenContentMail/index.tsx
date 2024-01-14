import styled from 'styled-components';

export const StyledChosenContentMail = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 5rem;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    gap: 1rem;
  }

  @media (max-width: 900px) {
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media (max-width: 550px) {
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;
