import styled from 'styled-components';

interface StyledAccordionProps {
  isOpen: boolean;
}

const StyledAccordion = styled.div<StyledAccordionProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '100%' : '55px')};
  transition: max-height 0.3s ease-in-out;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem 2rem 1rem 2rem;

  p {
    margin-bottom: 1rem;
  }
`;

export default StyledAccordion;
