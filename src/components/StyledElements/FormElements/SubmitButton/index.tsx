import { StyledSubmitButton } from './StyledSubmitButton';

interface SubmitButtonProps {
  text: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = 'Send',
  onClick,
}) => {
  const submitText = text;

  return (
    <StyledSubmitButton type="submit" onClick={onClick}>
      {submitText}
    </StyledSubmitButton>
  );
};

export default SubmitButton;
