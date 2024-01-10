import Label from '../Label';
import { StyledInputField } from './StyledInputField';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type }) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledInputField id={id} type={type} />
    </div>
  );
};

export default InputField;
