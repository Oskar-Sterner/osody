import { useState } from 'react';
import StyledAccordion from './StyledAccordion';
import { StyledSmallP } from '../TextElements';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isVisible: boolean;
}

function Accordion({ children, isVisible, title }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <StyledAccordion isOpen={isOpen}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={toggleAccordion}
      >
        <StyledSmallP>{title}</StyledSmallP>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {children}
    </StyledAccordion>
  );
}

export default Accordion;
