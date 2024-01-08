import styled from 'styled-components';

export const Main = styled.div`
  padding-bottom: 2rem;
  padding-top: 4rem;
  padding-left: 6rem;
  padding-right: 6rem;
  display: flex;
  flex-direction: column;
  height: 86.5vh;

  @media (max-width: 640px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (max-width: 580px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: 400px) {
    padding-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
