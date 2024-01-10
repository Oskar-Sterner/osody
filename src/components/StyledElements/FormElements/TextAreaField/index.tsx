import Label from '../Label';
import { StyledTextAreaField } from './StyledTextAreaField';

interface TextAreaFieldProps {
  label: string;
  id: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id }) => {
  return (
    <div>
      <Label text={label} id={id} />
      <StyledTextAreaField id={id} />
    </div>
  );
};

export default TextAreaField;
