import ChosenContent, {
  ContentType,
} from '../../../../utils/ContentPanel/ChosenContent';
import { StyledP } from '../../../StyledElements/TextElements';

function ChosenContentDescription() {
  const content: ContentType = ChosenContent[0];

  return (
    <>
      <StyledP>{content.description}</StyledP>
    </>
  );
}

export default ChosenContentDescription;
