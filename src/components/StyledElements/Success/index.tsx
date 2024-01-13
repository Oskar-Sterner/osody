import React, { useEffect, useState } from 'react';
import { AnimatedSuccess } from './StyledSuccess';

function Success() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      window.location.reload();
    }, 1050);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatedSuccess>
      <a></a>
      <a></a>
    </AnimatedSuccess>
  );
}

export default Success;
