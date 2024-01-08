import styled from 'styled-components';

export const StyledAnchorProjectPanel = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59dvh;
  width: 85%;
  padding: 0;
  transition: all 0.5s;
  &:hover {
    transform: perspective(900px) scale(0.97) translateZ(0);
    cursor: pointer;
  }

  @media (max-width: 730px) {
    height: 30dvh;
  }

  @media (max-width: 550px) {
    height: 10dvh;
    width: 100%;
  }
`;
