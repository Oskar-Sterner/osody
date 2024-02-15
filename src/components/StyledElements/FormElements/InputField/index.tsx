import React, { ChangeEvent } from 'react';
import Label from '../Label';
import { StyledInputField } from './StyledInputField';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  onChange,
  required,
  value,
}) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledInputField
        id={id}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
      />
    </div>
  );
};

export default InputField;
