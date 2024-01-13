import React, { ChangeEvent } from 'react';
import Label from '../Label';
import { StyledInputField } from './StyledInputField';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  onChange,
  required,
}) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledInputField
        id={id}
        type={type}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
