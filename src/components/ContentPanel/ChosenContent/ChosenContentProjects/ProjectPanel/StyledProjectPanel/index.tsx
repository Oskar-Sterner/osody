import styled from 'styled-components';

interface StyledProps {
  bg: string;
}

export const StyledProjectPanel = styled.div<StyledProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 1rem;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 20%
    ),
    url(${props => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 550px) {
    padding: 1rem 0.5rem 0rem 0.5rem;
  }
`;
