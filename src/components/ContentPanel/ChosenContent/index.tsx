import ChosenContentAbout from './ChosenContentAbout';
import ChosenContentDescription from './ChosenContentDescription';
import ChosenContentProjects from './ChosenContentProjects';
import ChosenContentTitle from './ChosenContentTitle';
import { useContext } from 'react';
import { ActiveComponentContext } from '../../../ActiveComponentContext';
import { StyledChosenContentText } from './StyledChosenContentText';
import ChosenContentMail from './ChosenContentMail';
import ChosenContentClients from './ChosenContentClients';

function ChosenContent() {
  const { activeComponent } = useContext(ActiveComponentContext);
  return (
    <>
      <div className="ChosenContent">
        <StyledChosenContentText isMail={activeComponent === 'mail'}>
          <ChosenContentTitle />
          <ChosenContentDescription />
        </StyledChosenContentText>

        {activeComponent === 'projects' && <ChosenContentProjects />}
        {activeComponent === 'about' && <ChosenContentAbout />}
        {activeComponent === 'mail' && <ChosenContentMail />}
        {activeComponent === 'clients' && <ChosenContentClients />}
      </div>
    </>
  );
}

export default ChosenContent;
