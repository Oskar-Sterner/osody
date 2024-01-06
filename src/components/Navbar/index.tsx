import { StyledNavbar } from './StyledNavbar';
import InlineSVG from 'react-inlinesvg';
import { ActiveComponentContext } from '../../ActiveComponentContext';
import { useContext } from 'react';

function Navbar() {
  const { activeComponent, setActiveComponent } = useContext(
    ActiveComponentContext
  );

  return (
    <StyledNavbar>
      <a onClick={() => setActiveComponent('projects')}>
        <InlineSVG
          className={activeComponent === 'projects' ? 'active' : ''}
          src="/src/assets/images/projects.svg"
        />
      </a>
      <a onClick={() => setActiveComponent('about')}>
        <InlineSVG
          className={activeComponent === 'about' ? 'active' : ''}
          src="/src/assets/images/about.svg"
        />
      </a>
      <a onClick={() => setActiveComponent('mail')}>
        <InlineSVG
          className={activeComponent === 'mail' ? 'active' : ''}
          src="/src/assets/images/mail.svg"
        />
      </a>
      <a onClick={() => setActiveComponent('clients')}>
        <InlineSVG
          className={activeComponent === 'clients' ? 'active' : ''}
          src="/src/assets/images/clients.svg"
        />
      </a>
    </StyledNavbar>
  );
}

export default Navbar;
