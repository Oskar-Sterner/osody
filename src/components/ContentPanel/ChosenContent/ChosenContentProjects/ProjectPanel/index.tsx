import { StyledProjectPanel } from './StyledProjectPanel';
import { StyledAnchorProjectPanel } from './StyledAnchorProjectPanel';
import {
  StyledH3,
  StyledSmallP,
} from '../../../../StyledElements/TextElements';
import { useGetProjectPanels } from '../../../../../hooks/queries';

function ProjectPanel() {
  const { projectPanels, loading, error } = useGetProjectPanels();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {projectPanels.map((panel, index) => (
        <StyledAnchorProjectPanel
          key={index}
          href={panel.link}
          className="ProjectPanel"
        >
          <StyledProjectPanel bg={panel.bg}>
            <StyledH3 uppercase>{panel.title}</StyledH3>
            <StyledSmallP>{panel.description}</StyledSmallP>
          </StyledProjectPanel>
        </StyledAnchorProjectPanel>
      ))}
    </>
  );
}

export default ProjectPanel;
