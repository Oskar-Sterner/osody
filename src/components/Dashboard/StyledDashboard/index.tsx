import styled from 'styled-components';

export const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  width: 100%;
  justify-items: center;
  align-items: center;
  overflow: auto;
  padding: 0.5rem 2rem 1rem 2rem;
  gap: 20px;

  & > div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: rgba(35, 35, 35, 0.2);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 1rem 2rem 1rem 2rem;
  }
`;
