import styled from 'styled-components';

export const StyledChosenContentClients = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3dvh;
  height: 100%;
  margin-top: -5px;
  width: 100%;
  justify-items: center;
  align-items: center;
  overflow: auto;
  animation: fadeInAnimation ease 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  & > :not(:nth-last-child(-n + 3)) {
    margin-bottom: 2dvh;
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2dvh;

    & > :not(:nth-last-child(-n + 2)) {
      margin-bottom: 2dvh;
    }
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;

    & > :not(:nth-last-child(-n + 1)) {
      margin-bottom: 2dvh;
    }
  }
`;
