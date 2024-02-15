import StyledModal from './StyledModal';

interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;
}

function Modal({ children, isVisible }: ModalProps) {
  if (!isVisible) {
    return null;
  }

  return <StyledModal>{children}</StyledModal>;
}

export default Modal;
