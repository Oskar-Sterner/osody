import styled from 'styled-components';

interface StyledChosenContentTextProps {
  isMail?: boolean;
}

export const StyledChosenContentText = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'isMail',
})<StyledChosenContentTextProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 205px;
  overflow: hidden;

  @media (max-width: 550px) {
    width: 100%;
    overflow: auto;
    display: ${props => (props.isMail ? 'none' : 'flex')};
  }
`;
