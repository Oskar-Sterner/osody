import { useState, useEffect } from 'react';
import {
  ProjectPanel,
  useGetProjectPanels,
  useUpdateProjectPanels,
} from '../../../hooks/queries';
import Accordion from '../../StyledElements/Accordions';
import InputField from '../../StyledElements/FormElements/InputField';
import SubmitButton from '../../StyledElements/FormElements/SubmitButton';
import Loader from '../../StyledElements/Loader';
import { StyledP } from '../../StyledElements/TextElements';
import { StyledManageProjectsPanel } from './StyledManageProjectsPanel';

type ProjectPanelField = keyof ProjectPanel;

function ManageProjectsPanel() {
  const {
    projectPanels,
    loading: loadingPanels,
    error: errorPanels,
  } = useGetProjectPanels();
  const {
    updateProjectPanels,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useUpdateProjectPanels();
  const [panelsState, setPanelsState] = useState<ProjectPanel[]>([]);

  useEffect(() => {
    setPanelsState(projectPanels);
  }, [projectPanels]);

  const handleFieldChange = (
    index: number,
    field: ProjectPanelField,
    value: string
  ) => {
    const newPanelsState = [...panelsState];
    newPanelsState[index][field] = value;
    setPanelsState(newPanelsState);
  };

  const handleSubmit = () => {
    updateProjectPanels(panelsState);
  };

  if (loadingPanels || loadingUpdate) {
    return <Loader />;
  }

  if (errorPanels || errorUpdate) {
    return <div>Error: {errorPanels || errorUpdate}</div>;
  }

  return (
    <StyledManageProjectsPanel>
      <StyledP underline>Manage Projects</StyledP>
      {panelsState.map((panel, index) => (
        <Accordion key={index} isVisible title={panel.title}>
          <InputField
            label="Title"
            id={`${index}-title`}
            type="text"
            onChange={e => handleFieldChange(index, 'title', e.target.value)}
            value={panel.title}
          />
          <InputField
            label="Description"
            id={`${index}-description`}
            type="text"
            onChange={e =>
              handleFieldChange(index, 'description', e.target.value)
            }
            value={panel.description}
          />
          <InputField
            label="Link"
            id={`${index}-link`}
            type="text"
            onChange={e => handleFieldChange(index, 'link', e.target.value)}
            value={panel.link}
          />
          <InputField
            label="Background Image URL"
            id={`${index}-bg`}
            type="text"
            onChange={e => handleFieldChange(index, 'bg', e.target.value)}
            value={panel.bg}
          />
          <SubmitButton text="Update" onClick={handleSubmit} />
        </Accordion>
      ))}
    </StyledManageProjectsPanel>
  );
}

export default ManageProjectsPanel;
