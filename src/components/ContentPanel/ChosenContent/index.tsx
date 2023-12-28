import ChosenContentDescription from './ChosenContentDescription';
import ChosenContentProjects from './ChosenContentProjects';
import ChosenContentTitle from './ChosenContentTitle';
import { StyledChosenContentText } from './StyledChosenContentText';

function ChosenContent() {
  return (
    <>
      <div className="ChosenContent">
        <StyledChosenContentText>
          <ChosenContentTitle />
          <ChosenContentDescription />
        </StyledChosenContentText>

        <ChosenContentProjects />
      </div>
    </>
  );
}

export default ChosenContent;
