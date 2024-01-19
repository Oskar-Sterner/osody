import MailPanel from './MailPanel';
import DiscordPanel from './MailPanel/DiscordPanel';
import { StyledChosenContentMail } from './StyledChosenContentMail';

function ChosenContentMail() {
  return (
    <>
      <StyledChosenContentMail>
        <MailPanel />
        <DiscordPanel />
      </StyledChosenContentMail>
    </>
  );
}

export default ChosenContentMail;
