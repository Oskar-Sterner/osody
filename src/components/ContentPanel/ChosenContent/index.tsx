import ChosenContentAbout from './ChosenContentAbout';
import ChosenContentDescription from './ChosenContentDescription';
import ChosenContentProjects from './ChosenContentProjects';
import ChosenContentTitle from './ChosenContentTitle';
import { useContext } from 'react';
import { ActiveComponentContext } from '../../../ActiveComponentContext';
import { StyledChosenContentText } from './StyledChosenContentText';

function ChosenContent() {
  const { activeComponent } = useContext(ActiveComponentContext);
  return (
    <>
      <div className="ChosenContent">
        <StyledChosenContentText>
          <ChosenContentTitle />
          <ChosenContentDescription />
        </StyledChosenContentText>

        {activeComponent === 'projects' && <ChosenContentProjects />}
        {activeComponent === 'about' && <ChosenContentAbout />}
      </div>
    </>
  );
}

export default ChosenContent;
