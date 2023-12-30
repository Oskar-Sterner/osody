import styled from 'styled-components';

export const StyledAnchorProjectPanel = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 534px;
  width: 85%;
  padding: 0;
  transition: all 0.5s;
  &:hover {
    transform: perspective(900px) scale(0.97) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
    cursor: pointer;
  }
`;
