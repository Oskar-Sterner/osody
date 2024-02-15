import { StyledNavbar } from './StyledNavbar';
import InlineSVG from 'react-inlinesvg';
import { ActiveComponentContext } from '../../ActiveComponentContext';
import { useContext, useState } from 'react';
import DeveloperButton from '../StyledElements/Buttons/DeveloperButton';
import Modal from '../StyledElements/Modals';
import LoginModal from '../StyledElements/Modals/LoginModal';
import projectsSVG from '../../assets/images/projects.svg';
import aboutSVG from '../../assets/images/about.svg';
import mailSVG from '../../assets/images/mail.svg';
import clientsSVG from '../../assets/images/clients.svg';

function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => setIsModalVisible(false);

  const openModal = () => setIsModalVisible(true);

  const { activeComponent, setActiveComponent } = useContext(
    ActiveComponentContext
  );

  return (
    <>
      <DeveloperButton href="#" text="LOGIN" onClick={openModal} />
      <Modal isVisible={isModalVisible}>
        <LoginModal closeModal={closeModal} />
      </Modal>
      <StyledNavbar>
        <a onClick={() => setActiveComponent('projects')}>
          <InlineSVG
            className={activeComponent === 'projects' ? 'active' : ''}
            src={projectsSVG}
          />
        </a>
        <a onClick={() => setActiveComponent('about')}>
          <InlineSVG
            className={activeComponent === 'about' ? 'active' : ''}
            src={aboutSVG}
          />
        </a>
        <a onClick={() => setActiveComponent('mail')}>
          <InlineSVG
            className={activeComponent === 'mail' ? 'active' : ''}
            src={mailSVG}
          />
        </a>
        <a onClick={() => setActiveComponent('clients')}>
          <InlineSVG
            className={activeComponent === 'clients' ? 'active' : ''}
            src={clientsSVG}
          />
        </a>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
