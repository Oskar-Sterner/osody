import ChosenContent, {
  ContentType,
} from '../../../../utils/ContentPanel/ChosenContent';
import { StyledH2 } from '../../../StyledElements/TextElements';
import { ActiveComponentContext } from '../../../../ActiveComponentContext';
import { useContext } from 'react';

function ChosenContentTitle() {
  const { activeComponent } = useContext(ActiveComponentContext);

  let content: ContentType;
  switch (activeComponent) {
    case 'projects':
      content = ChosenContent[0];
      break;
    case 'about':
      content = ChosenContent[1];
      break;
    case 'mail':
      content = ChosenContent[2];
      break;
    case 'clients':
      content = ChosenContent[3];
      break;
    default:
      throw new Error(`Invalid activeComponent: ${activeComponent}`);
  }

  return <StyledH2 underline>{content.title}</StyledH2>;
}

export default ChosenContentTitle;
