import { StyledIframe } from './StyledDiscordIframe';
import { StyledDiscordPanel } from './StyledDiscordPanel';

function DiscordPanel() {
  return (
    <StyledDiscordPanel>
      <StyledIframe
        src="https://canary.discord.com/widget?id=1194473994737426552&theme=dark"
        width="350"
        height="500"
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        style={{ borderRadius: '10px' }}
      ></StyledIframe>
    </StyledDiscordPanel>
  );
}

export default DiscordPanel;
