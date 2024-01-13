import styled from 'styled-components';

export const StyledMailPanel = styled.div`
  width: 60%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 1rem 1rem;

  @media (max-width: 1200px) {
    width: 30%;
  }
`;
