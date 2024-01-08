import {
  StyledH2,
  StyledH3,
  StyledP,
} from '../../../../../StyledElements/TextElements';
import { StyledInformationPanel } from './StyledInformationPanel';
import InformationPanelData from '../../../../../../utils/ContentPanel/InformationPanel';
import { StyledImg } from '../../../../../StyledElements/ImageElements';
import { StyledToolsPanel } from './StyledToolsPanel';

function InformationPanel() {
  return (
    <>
      {InformationPanelData.map((panelData, index) => (
        <StyledInformationPanel key={index}>
          <StyledH2>{panelData.title}</StyledH2>
          <StyledP>{panelData.description}</StyledP>
          <StyledH3>{panelData.use}</StyledH3>
          <StyledP>{panelData.ides}</StyledP>
          <StyledToolsPanel>
            {panelData.idesIcons.map((icon, iconIndex) => (
              <StyledImg
                width="32px"
                key={iconIndex}
                src={icon}
                alt={panelData.title}
              />
            ))}
          </StyledToolsPanel>
          <StyledP>{panelData.languages}</StyledP>
          <StyledToolsPanel>
            {panelData.languagesIcons.map((icon, iconIndex) => (
              <StyledImg
                width="32px"
                key={iconIndex}
                src={icon}
                alt={panelData.title}
              />
            ))}
          </StyledToolsPanel>
          <StyledP>{panelData.editing}</StyledP>
          <StyledToolsPanel>
            {panelData.editingIcons.map((icon, iconIndex) => (
              <StyledImg
                width="32px"
                key={iconIndex}
                src={icon}
                alt={panelData.title}
              />
            ))}
          </StyledToolsPanel>
        </StyledInformationPanel>
      ))}
    </>
  );
}

export default InformationPanel;
