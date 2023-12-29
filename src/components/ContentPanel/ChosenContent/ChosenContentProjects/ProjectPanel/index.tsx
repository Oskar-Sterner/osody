import { StyledProjectPanel } from './StyledProjectPanel';
import ProjectPanels from '../../../../../utils/ContentPanel/ProjectPanels';
import { StyledAnchorProjectPanel } from './StyledAnchorProjectPanel';
import {
  StyledH3,
  StyledSmallP,
} from '../../../../StyledElements/TextElements';

function ProjectPanel() {
  return (
    <>
      {ProjectPanels.map((panel, index) => (
        <StyledAnchorProjectPanel href={panel.link} className="ProjectPanel">
          <StyledProjectPanel key={index} bg={panel.bg}>
            <StyledH3 uppercase>{panel.title}</StyledH3>
            <StyledSmallP>{panel.description}</StyledSmallP>
          </StyledProjectPanel>
        </StyledAnchorProjectPanel>
      ))}
    </>
  );
}

export default ProjectPanel;
