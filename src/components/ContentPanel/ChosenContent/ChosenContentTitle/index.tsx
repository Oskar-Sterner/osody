import ChosenContent, {
  ContentType,
} from '../../../../utils/ContentPanel/ChosenContent';
import { StyledH2 } from '../../../StyledElements/TextElements';

function ChosenContentTitle() {
  const content: ContentType = ChosenContent[0];

  return (
    <>
      <StyledH2 underline>{content.title}</StyledH2>
    </>
  );
}

export default ChosenContentTitle;
