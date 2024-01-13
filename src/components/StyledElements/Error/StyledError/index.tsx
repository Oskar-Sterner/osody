import styled, { keyframes } from 'styled-components';

const errorPulsIn = keyframes`
    0% {
        box-shadow: inset 0 0 0 1rem #ff0000;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 #ff0000;
        opacity: 0;
    }
`;

const errorPulsOut = keyframes`
    0%, 50% {
        box-shadow: 0 0 0 0 #ff0000;
        opacity: 0;
    }
    100% {
        box-shadow: 0 0 0 1rem #ff0000;
        opacity: 1;
    }
`;

const xInMinus = keyframes`
    0% {
        transform: scale(0) rotate(-45deg);
    }
    100% {
        transform: scale(1) rotate(-45deg);
    }
`;

const xInPos = keyframes`
    0% {
        transform: scale(0) rotate(45deg);
    }
    100% {
        transform: scale(1) rotate(45deg);
    }
`;

export const AnimatedError = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  font-size: 10rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${errorPulsOut} 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 0, 0, 0.75));
  }

  &::before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #ff0000;
    animation-name: ${errorPulsIn};
  }

  &::after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #00bfff;
  }

  a {
    position: absolute;
    width: 15px;
    height: 150px;
    background-color: #ff0000;
    filter: drop-shadow(0 0 1rem rgba(255, 0, 0, 0.75));

    &:first-child {
      animation: ${xInMinus} 1.8s infinite;
      transform: rotate(-45deg);
    }

    &:last-child {
      animation: ${xInPos} 1.8s infinite;
      transform: rotate(45deg);
    }
  }
`;
