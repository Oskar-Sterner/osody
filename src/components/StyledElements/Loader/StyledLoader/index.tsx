import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  100% { transform: scale(0); }
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    background-color: #00bfff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0 5px;

    animation: ${loadingAnimation} 1s infinite;
    animation-delay: 0.2s;

    &:nth-child(2) {
      animation-delay: 0.4s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
`;
