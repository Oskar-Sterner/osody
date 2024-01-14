import styled from 'styled-components';

export const StyledAboutPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 5dvh;
  padding-left: 2rem;
  padding-right: 2rem;
  animation: fadeInAnimation ease 0.4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 550px) {
    padding-left: 0rem;
    padding-right: 0rem;
    row-gap: 0;
    justify-content: space-between;
  }
`;
