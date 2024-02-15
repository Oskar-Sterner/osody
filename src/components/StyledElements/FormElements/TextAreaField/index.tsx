import React, { ChangeEvent } from 'react';
import Label from '../Label';
import { StyledTextAreaField } from './StyledTextAreaField';

interface TextAreaFieldProps {
  label: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  value?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  onChange,
  required,
  value,
}) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledTextAreaField
        id={id}
        onChange={onChange}
        required={required}
        value={value}
      />{' '}
    </div>
  );
};

export default TextAreaField;
