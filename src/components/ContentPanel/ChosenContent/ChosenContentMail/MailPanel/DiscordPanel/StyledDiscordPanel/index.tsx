import styled from 'styled-components';

export const StyledDiscordPanel = styled.div`
  height: 79.7%;
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
`;
