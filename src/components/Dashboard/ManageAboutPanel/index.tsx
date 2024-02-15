import { useState, useEffect } from 'react';
import {
  useGetInformationPanel,
  useGetTeamPanel,
  useUpdateTeamPanel,
  useUpdateInformationPanel,
} from '../../../hooks/queries';
import Accordion from '../../StyledElements/Accordions';
import InputField from '../../StyledElements/FormElements/InputField';
import SubmitButton from '../../StyledElements/FormElements/SubmitButton';
import Loader from '../../StyledElements/Loader';
import { StyledP } from '../../StyledElements/TextElements';
import { StyledManageAboutPanel } from './StyledManageAboutPanel';

function ManageAboutPanel() {
  const {
    informationPanel,
    loading: loadingInformationPanel,
    error: errorInformationPanel,
  } = useGetInformationPanel();
  const {
    teamPanel,
    loading: loadingTeamPanel,
    error: errorTeamPanel,
  } = useGetTeamPanel();
  const { updateTeamPanel } = useUpdateTeamPanel();
  const { updateInformationPanel } = useUpdateInformationPanel();
  const [updatedInformationPanel, setUpdatedInformationPanel] =
    useState(informationPanel);
  const [updatedTeamPanel, setUpdatedTeamPanel] = useState(teamPanel);

  useEffect(() => {
    setUpdatedTeamPanel(teamPanel);
  }, [teamPanel]);

  useEffect(() => {
    setUpdatedInformationPanel(informationPanel);
  }, [informationPanel]);

  const handleUpdateTeamPanel = () => {
    updateTeamPanel(updatedTeamPanel);
  };

  const handleUpdateInformationPanel = () => {
    updateInformationPanel(updatedInformationPanel);
  };

  const handleInformationChange = (
    index: number,
    sectionIndex: number,
    field: string,
    value: string,
    iconIndex?: number
  ) => {
    const newInformationPanel = [...updatedInformationPanel];
    if (field === 'sectionContent') {
      newInformationPanel[index].sections[sectionIndex].sectionContent = value;
    } else if (field === 'icon' && iconIndex !== undefined) {
      newInformationPanel[index].sections[sectionIndex].sectionIcons[
        iconIndex
      ] = value;
    }
    setUpdatedInformationPanel(newInformationPanel);
  };

  const handleTeamChange = (
    panelIndex: number,
    memberIndex: number,
    field: string,
    value: string
  ) => {
    const newTeamPanel = [...updatedTeamPanel];
    if (field === 'name') {
      newTeamPanel[panelIndex].members[memberIndex].name = value;
    } else if (field === 'img') {
      newTeamPanel[panelIndex].members[memberIndex].img = value;
    } else if (field === 'role') {
      newTeamPanel[panelIndex].members[memberIndex].role = value;
    }
    setUpdatedTeamPanel(newTeamPanel);
  };

  if (loadingInformationPanel || loadingTeamPanel) {
    return <Loader />;
  }

  if (errorInformationPanel || errorTeamPanel) {
    return (
      <div>
        Error: {errorInformationPanel?.message || errorTeamPanel?.message}
      </div>
    );
  }

  return (
    <StyledManageAboutPanel>
      <StyledP underline>Manage About</StyledP>
      {updatedInformationPanel.map((panel, index) =>
        panel.sections.map((section, sectionIndex) => (
          <Accordion key={sectionIndex} isVisible title={section.sectionTitle}>
            <InputField
              label="Section Content"
              id={`${panel.title}-sectionContent-${sectionIndex}`}
              type="text"
              value={section.sectionContent}
              onChange={e =>
                handleInformationChange(
                  index,
                  sectionIndex,
                  'sectionContent',
                  e.target.value
                )
              }
            />
            {section.sectionIcons.map((icon, iconIndex) => (
              <InputField
                key={iconIndex}
                label={`Icon URL ${iconIndex + 1}`}
                id={`${panel.title}-sectionIcon-${sectionIndex}-${iconIndex}`}
                type="text"
                value={icon}
                onChange={e =>
                  handleInformationChange(
                    index,
                    sectionIndex,
                    'icon',
                    e.target.value,
                    iconIndex
                  )
                }
              />
            ))}
            <SubmitButton
              text="Update"
              onClick={handleUpdateInformationPanel}
            />
          </Accordion>
        ))
      )}
      {updatedTeamPanel.map((panel, panelIndex) => (
        <Accordion key={panelIndex} isVisible title={panel.title}>
          {panel.members.map((member, memberIndex) => (
            <div key={memberIndex}>
              <InputField
                label="Name"
                id={`${panel.title}-memberName-${memberIndex}`}
                type="text"
                value={member.name}
                onChange={e =>
                  handleTeamChange(
                    panelIndex,
                    memberIndex,
                    'name',
                    e.target.value
                  )
                }
              />
              <InputField
                label="Image URL"
                id={`${panel.title}-memberImg-${memberIndex}`}
                type="text"
                value={member.img}
                onChange={e =>
                  handleTeamChange(
                    panelIndex,
                    memberIndex,
                    'img',
                    e.target.value
                  )
                }
              />
              <InputField
                label="Role"
                id={`${panel.title}-memberRole-${memberIndex}`}
                type="text"
                value={member.role}
                onChange={e =>
                  handleTeamChange(
                    panelIndex,
                    memberIndex,
                    'role',
                    e.target.value
                  )
                }
              />
              <hr />
            </div>
          ))}
          <SubmitButton text="Update" onClick={handleUpdateTeamPanel} />
        </Accordion>
      ))}
    </StyledManageAboutPanel>
  );
}

export default ManageAboutPanel;
