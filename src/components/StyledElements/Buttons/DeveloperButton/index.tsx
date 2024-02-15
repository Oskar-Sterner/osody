declare global {
  interface Window {
    showButton: () => void;
    hideButton: () => void;
  }
}

import { useState } from 'react';
import { StyledDeveloperButton } from './StyledDeveloperButton';

interface DeveloperButtonProps {
  text: string;
  href: string;
  onClick: () => void;
}

function DeveloperButton({ text, href, onClick }: DeveloperButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  window.showButton = () => setIsVisible(true);
  window.hideButton = () => setIsVisible(false);

  if (!isVisible) {
    return null;
  }

  return (
    <StyledDeveloperButton href={href} onClick={onClick}>
      {text}
    </StyledDeveloperButton>
  );
}

export default DeveloperButton;
