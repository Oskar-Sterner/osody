import { useState, useEffect } from 'react';
import {
  ChosenContent,
  useGetChosenContent,
  useUpdateChosenContent,
} from '../../../hooks/queries';
import Accordion from '../../StyledElements/Accordions';
import InputField from '../../StyledElements/FormElements/InputField';
import SubmitButton from '../../StyledElements/FormElements/SubmitButton';
import TextAreaField from '../../StyledElements/FormElements/TextAreaField';
import Loader from '../../StyledElements/Loader';
import { StyledP } from '../../StyledElements/TextElements';
import { StyledManageContentPanel } from './StyledManageMailPanel';

type ChosenContentField = keyof ChosenContent;

function ManageContentPanel() {
  const { chosenContent, loading, error } = useGetChosenContent();
  const { updateChosenContent } = useUpdateChosenContent();
  const [contentState, setContentState] = useState<ChosenContent[]>([]);

  useEffect(() => {
    setContentState(chosenContent);
  }, [chosenContent]);

  const handleFieldChange = (
    index: number,
    field: ChosenContentField,
    value: string
  ) => {
    const newContentState = [...contentState];
    newContentState[index][field] = value;
    setContentState(newContentState);
  };

  const handleSubmit = () => {
    updateChosenContent(contentState);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledManageContentPanel>
      <StyledP underline>Manage Content</StyledP>
      {chosenContent.map((content, index) => (
        <Accordion key={index} isVisible title={content.title}>
          <TextAreaField
            label="Description"
            id={`content-description-${index}`}
            onChange={e =>
              handleFieldChange(index, 'description', e.target.value)
            }
            value={content.description}
          />
          {content.img && (
            <InputField
              label="Image URL"
              id={`content-img-${index}`}
              type="text"
              onChange={e => handleFieldChange(index, 'img', e.target.value)}
              value={content.img}
            />
          )}
          <SubmitButton text="Update" onClick={() => handleSubmit()} />
        </Accordion>
      ))}
    </StyledManageContentPanel>
  );
}

export default ManageContentPanel;
