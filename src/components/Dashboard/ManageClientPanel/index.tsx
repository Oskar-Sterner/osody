import { useState, useEffect } from 'react';
import {
  ClientPanel,
  useGetClientPanels,
  useUpdateClientPanels,
} from '../../../hooks/queries';
import Accordion from '../../StyledElements/Accordions';
import InputField from '../../StyledElements/FormElements/InputField';
import SubmitButton from '../../StyledElements/FormElements/SubmitButton';
import Loader from '../../StyledElements/Loader';
import { StyledP } from '../../StyledElements/TextElements';
import { StyledManageClientPanel } from './StyledManageClientPanel';

type ClientPanelField = keyof ClientPanel;

function ManageClientPanel() {
  const {
    clientPanels,
    loading: loadingPanels,
    error: errorPanels,
  } = useGetClientPanels();
  const {
    updateClientPanels,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useUpdateClientPanels();
  const [panelsState, setPanelsState] = useState<ClientPanel[]>([]);

  useEffect(() => {
    setPanelsState(clientPanels);
  }, [clientPanels]);

  const handleFieldChange = (
    index: number,
    field: ClientPanelField,
    value: string
  ) => {
    const newPanelsState = [...panelsState];
    newPanelsState[index][field] = value;
    setPanelsState(newPanelsState);
  };

  const handleSubmit = () => {
    updateClientPanels(panelsState);
  };

  if (loadingPanels || loadingUpdate) {
    return <Loader />;
  }

  if (errorPanels || errorUpdate) {
    return (
      <div>Error: {errorPanels || errorUpdate?.message || 'Unknown error'}</div>
    );
  }

  return (
    <StyledManageClientPanel>
      <StyledP underline>Manage Clients</StyledP>
      {panelsState.map((panel, index) => (
        <Accordion key={index} isVisible title={panel.title}>
          <InputField
            label="Description"
            id={`clientPanel-description-${index}`}
            type="text"
            onChange={e =>
              handleFieldChange(index, 'description', e.target.value)
            }
            value={panel.description}
          />
          <InputField
            label="Link"
            id={`clientPanel-link-${index}`}
            type="text"
            onChange={e => handleFieldChange(index, 'link', e.target.value)}
            value={panel.link}
          />
          <InputField
            label="Background Image URL"
            id={`clientPanel-bg-${index}`}
            type="text"
            onChange={e => handleFieldChange(index, 'bg', e.target.value)}
            value={panel.bg}
          />
          <SubmitButton text="Update" onClick={handleSubmit} />
        </Accordion>
      ))}
    </StyledManageClientPanel>
  );
}

export default ManageClientPanel;
