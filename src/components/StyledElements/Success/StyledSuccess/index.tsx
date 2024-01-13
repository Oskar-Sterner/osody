import styled, { keyframes } from 'styled-components';

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

const successPulsIn = keyframes`
  0% {
    box-shadow: inset 0 0 0 1rem #37ff00;
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 #37ff00;
    opacity: 0;
  }
`;

const successPulsOut = keyframes`
  0%, 50% {
    box-shadow: 0 0 0 0 #37ff00;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem #37ff00;
    opacity: 1;
  }
`;

export const AnimatedSuccess = styled.span`
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

  a {
    position: absolute;
    background-color: #37ff00;
    filter: drop-shadow(0 0 1rem #37ff00bf);

    &:first-child {
      margin-top: 31px;
      margin-right: 40px;
      width: 15px;
      height: 50px;
      animation: ${xInMinus} 1.1s infinite;
      transform: rotate(-45deg);
    }

    &:last-child {
      margin-left: 50px;
      width: 15px;
      height: 100px;
      animation: ${xInPos} 1.1s infinite;
      transform: rotate(45deg);
    }
  }

  &:before {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${successPulsIn} 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem #37ff00bf);
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #37ff00;
  }

  &:after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: ${successPulsOut} 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem #37ff00bf);
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #37ff00;
  }
`;
