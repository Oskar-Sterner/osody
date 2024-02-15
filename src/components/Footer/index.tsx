import InlineSVG from 'react-inlinesvg';
import { StyledFooter } from './StyledFooter';
import { Seperator } from '../StyledElements/Seperator';
import { StyledSmallP } from '../StyledElements/TextElements';
import { StyledFooterText } from './StyledFooterText';
// Import SVG files
import githubSVG from '../../assets/images/github.svg';
import discordSVG from '../../assets/images/discord.svg';
import steamSVG from '../../assets/images/steam.svg';

function Footer() {
  return (
    <>
      <StyledFooter>
        <Seperator />
        <a href="https://github.com/OSODY-STUDIOS" target="_blank">
          <InlineSVG src={githubSVG} />
        </a>
        <a href="https://discord.gg/FsTtQBdSPn" target="_blank">
          <InlineSVG src={discordSVG} />
        </a>
        <a
          href="https://steamcommunity.com/groups/osody-studios"
          target="_blank"
        >
          <InlineSVG src={steamSVG} />
        </a>
        <Seperator />
      </StyledFooter>
      <StyledFooterText>
        <StyledSmallP>
          Copyright ©2024 OSODY.SE All rights reserved.
        </StyledSmallP>
      </StyledFooterText>
    </>
  );
}

export default Footer;
