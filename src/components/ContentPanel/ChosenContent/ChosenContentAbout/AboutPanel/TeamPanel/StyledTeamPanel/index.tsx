import styled from 'styled-components';

export const StyledTeamPanel = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1rem 2rem 1rem 1rem;
  flex-grow: 0;

  @media (max-width: 1010px) {
    width: auto;
  }
`;
