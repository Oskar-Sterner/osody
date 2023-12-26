import InlineSVG from 'react-inlinesvg';
import { StyledFooter } from './StyledFooter';
import { Seperator } from '../StyledElements/Seperator';
import { StyledSmallP } from '../StyledElements/TextElements';
import { StyledFooterText } from './StyledFooterText';

function Footer() {
  return (
    <>
      <StyledFooter>
        <Seperator />
        <a>
          <InlineSVG src="/src/assets/images/github.svg" />
        </a>
        <a>
          <InlineSVG src="/src/assets/images/discord.svg" />
        </a>
        <a>
          <InlineSVG src="/src/assets/images/steam.svg" />
        </a>
        <Seperator />
      </StyledFooter>
      <StyledFooterText>
        <StyledSmallP>
          Copyright ©2023 OSODY.SE All rights reserved.
        </StyledSmallP>
      </StyledFooterText>
    </>
  );
}

export default Footer;
