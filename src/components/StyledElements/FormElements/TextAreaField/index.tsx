import React, { ChangeEvent } from 'react';
import Label from '../Label';
import { StyledTextAreaField } from './StyledTextAreaField';

interface TextAreaFieldProps {
  label: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  onChange,
  required,
}) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledTextAreaField
        id={id}
        onChange={onChange}
        required={required}
      />{' '}
    </div>
  );
};

export default TextAreaField;
