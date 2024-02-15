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
  padding: 1rem 1rem 1rem 1rem;
  flex-grow: 0;

  @media (max-width: 1010px) {
    width: auto;
  }
`;

export const StyledMemberPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto auto);
  gap: 20px;

  & > *:last-child {
    grid-column: span 2;
  }

  @media (max-width: 1320px) {
    & > * {
      grid-column: span 2;
    }
  }
`;

export const StyledMemberCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem;

  & > :nth-child(1) {
    grid-column: 1;
  }

  & > :nth-child(2) {
    grid-column: 2;
  }

  & > :nth-child(3) {
    grid-column: 1 / span 2;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
