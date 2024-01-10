import React from 'react';

interface LabelProps {
  text: string;
  id: string;
}

const Label: React.FC<LabelProps> = ({ text, id }) => {
  return <label htmlFor={id}>{text}</label>;
};

export default Label;
