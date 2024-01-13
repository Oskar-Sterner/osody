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
        <a href="https://github.com/OSODY-STUDIOS" target="_blank">
          <InlineSVG src="/src/assets/images/github.svg" />
        </a>
        <a href="https://discord.gg/FsTtQBdSPn" target="_blank">
          <InlineSVG src="/src/assets/images/discord.svg" />
        </a>
        <a
          href="https://steamcommunity.com/groups/osody-studios"
          target="_blank"
        >
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
