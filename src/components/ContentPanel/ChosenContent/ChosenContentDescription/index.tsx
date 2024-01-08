import ChosenContent, {
  ContentType,
} from '../../../../utils/ContentPanel/ChosenContent';
import { StyledP } from '../../../StyledElements/TextElements';
import { ActiveComponentContext } from '../../../../ActiveComponentContext';
import { useContext } from 'react';
import { StyledImg } from '../../../StyledElements/ImageElements';

function ChosenContentDescription() {
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

  return activeComponent === 'about' && content.img ? (
    <StyledImg
      src={content.img}
      alt={content.title}
      calculatedheight="100%"
      borderradius="15px"
    />
  ) : (
    <StyledP>{content.description}</StyledP>
  );
}

export default ChosenContentDescription;
