import { StyledNavbar } from './StyledNavbar';
import InlineSVG from 'react-inlinesvg';

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <a>
          <InlineSVG src="/src/assets/images/projects.svg" />
        </a>
        <a>
          <InlineSVG src="/src/assets/images/about.svg" />
        </a>
        <a>
          <InlineSVG src="/src/assets/images/mail.svg" />
        </a>
        <a>
          <InlineSVG src="/src/assets/images/clients.svg" />
        </a>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
