import { ActiveComponentContext } from '../../../../ActiveComponentContext';
import { useContext, useEffect, useState } from 'react';
import { useGetChosenContent, ChosenContent } from '../../../../hooks/queries';
import { StyledH2 } from '../../../StyledElements/TextElements';
import Loader from '../../../StyledElements/Loader';

function ChosenContentTitle() {
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
        default:
          throw new Error(`Invalid activeComponent: ${activeComponent}`);
      }
    }
  }, [activeComponent, chosenContent, loading, error]);

  if (loading) return <Loader />;
  if (error) return <StyledH2 underline>Error</StyledH2>;

  return content ? <StyledH2 underline>{content.title}</StyledH2> : null;
}

export default ChosenContentTitle;
