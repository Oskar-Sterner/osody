import { StyledSubmitButton } from './StyledSubmitButton';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text = 'Send' }) => {
  const submitText = text;

  return <StyledSubmitButton type="submit">{submitText}</StyledSubmitButton>;
};

export default SubmitButton;
