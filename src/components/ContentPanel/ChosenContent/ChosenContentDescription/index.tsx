import { StyledP } from '../../../StyledElements/TextElements';
import { ActiveComponentContext } from '../../../../ActiveComponentContext';
import { useContext, useEffect, useState } from 'react';
import { useGetChosenContent, ChosenContent } from '../../../../hooks/queries';
import { StyledImg } from '../../../StyledElements/ImageElements';
import Loader from '../../../StyledElements/Loader';

function ChosenContentDescription() {
  const { activeComponent } = useContext(ActiveComponentContext);
  const { chosenContent, loading, error } = useGetChosenContent();
  const [content, setContent] = useState<ChosenContent | null>(null);

  useEffect(() => {
    if (!loading && !error) {
      switch (activeComponent) {
        case 'projects':
          setContent(chosenContent[0]);
          break;
        case 'about':
          setContent(chosenContent[1]);
          break;
        case 'mail':
          setContent(chosenContent[2]);
          break;
        case 'clients':
          setContent(chosenContent[3]);
          break;
        case 'dashboard':
          setContent(chosenContent[4]);
          break;
        default:
          throw new Error(`Invalid activeComponent: ${activeComponent}`);
      }
    }
  }, [activeComponent, chosenContent, loading, error]);

  if (loading) return <Loader />;
  if (error) return <StyledP>Error: {error}</StyledP>;

  return (
    <>
      {activeComponent !== 'about' && <StyledP>{content?.description}</StyledP>}
      {activeComponent === 'about' && content?.img && (
        <StyledImg src={content.img} calculatedheight="100%" />
      )}
    </>
  );
}

export default ChosenContentDescription;
