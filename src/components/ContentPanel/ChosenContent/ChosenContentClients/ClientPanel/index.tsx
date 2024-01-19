import { StyledClientPanel } from './StyledClientPanel';
import ClientPanels from '../../../../../utils/ContentPanel/ClientPanels';
import { StyledAnchorClientPanel } from './StyledAnchorClientPanel';
import {
  StyledH3,
  StyledSmallP,
} from '../../../../StyledElements/TextElements';

function ClientPanel() {
  return (
    <>
      {ClientPanels.map((panel, index) => (
        <StyledAnchorClientPanel href={panel.link} className="ProjectPanel">
          <StyledClientPanel key={index} bg={panel.bg}>
            <StyledH3 uppercase>{panel.title}</StyledH3>
            <StyledSmallP>{panel.description}</StyledSmallP>
          </StyledClientPanel>
        </StyledAnchorClientPanel>
      ))}
    </>
  );
}

export default ClientPanel;
