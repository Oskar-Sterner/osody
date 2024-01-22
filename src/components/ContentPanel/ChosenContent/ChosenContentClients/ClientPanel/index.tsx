import { StyledClientPanel } from './StyledClientPanel';
import { StyledAnchorClientPanel } from './StyledAnchorClientPanel';
import {
  StyledH3,
  StyledSmallP,
} from '../../../../StyledElements/TextElements';
import { useGetClientPanels } from '../../../../../hooks/queries';
import Loader from '../../../../StyledElements/Loader';

function ClientPanel() {
  const { clientPanels, loading, error } = useGetClientPanels();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {clientPanels.map((panel, index) => (
        <StyledAnchorClientPanel
          key={index}
          href={panel.link}
          className="ProjectPanel"
        >
          <StyledClientPanel bg={panel.bg}>
            <StyledH3 uppercase>{panel.title}</StyledH3>
            <StyledSmallP>{panel.description}</StyledSmallP>
          </StyledClientPanel>
        </StyledAnchorClientPanel>
      ))}
    </>
  );
}

export default ClientPanel;
