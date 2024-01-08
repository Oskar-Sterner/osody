import { StyledImg } from '../../../../StyledElements/ImageElements';
import InformationPanel from './InformationPanel';
import { StyledAboutPanel } from './StyledAboutPanel';
import { StyledInformationArea } from './StyledInformationArea';
import TeamPanel from './TeamPanel';

function AboutPanel() {
  return (
    <>
      <StyledAboutPanel>
        <StyledImg
          src="https://i.imgur.com/GS49Ar8.png"
          alt="Osody Studios Logo"
          width="30dvh"
          margintop="0.75rem"
        />
        <StyledInformationArea>
          <InformationPanel />
          <TeamPanel />
        </StyledInformationArea>
      </StyledAboutPanel>
    </>
  );
}

export default AboutPanel;
