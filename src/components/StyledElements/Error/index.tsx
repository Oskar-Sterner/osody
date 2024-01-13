import React, { useEffect, useState } from 'react';
import { AnimatedError } from './StyledError';

function Error() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1050);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatedError>
      <a></a>
      <a></a>
    </AnimatedError>
  );
}

export default Error;
