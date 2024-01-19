import styled from 'styled-components';

export const StyledMailPanel = styled.div`
  width: 60%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 1rem;
  animation: fadeInAnimation ease 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 1200px) {
    width: 85%;
    margin-left: 1rem;
  }

  @media (max-width: 700px) {
    width: 85%;
    margin-left: 0;
  }

  @media (max-width: 550px) {
    padding-top: 0;
    width: 90%;
    margin-left: 0;
    padding-bottom: 0;
  }
`;
