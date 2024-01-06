import styled from 'styled-components';

export const StyledContentPanel = styled.div`
  height: 100%;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 2rem;
  padding: 1rem 0.5rem 2rem 2rem;
  overflow: hidden;

  @media (max-width: 730px) {
    overflow: hidden;
  }
`;
