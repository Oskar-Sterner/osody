import React from 'react';
import {
  StyledH2,
  StyledH3,
  StyledP,
} from '../../../../../StyledElements/TextElements';
import { StyledInformationPanel } from './StyledInformationPanel';
import { StyledImg } from '../../../../../StyledElements/ImageElements';
import { StyledToolsPanel } from './StyledToolsPanel';
import {
  InformationPanelType,
  useGetInformationPanel,
} from '../../../../../../hooks/queries';
import Loader from '../../../../../StyledElements/Loader';

function InformationPanel() {
  const { informationPanel, loading, error } = useGetInformationPanel();

  if (loading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {informationPanel.map((panelData: InformationPanelType, index) => (
        <StyledInformationPanel key={index}>
          <StyledH2>{panelData.title}</StyledH2>
          <StyledP>{panelData.description}</StyledP>
          {panelData.sections.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <StyledH3>{section.sectionTitle}</StyledH3>
              <StyledP>{section.sectionContent}</StyledP>
              <StyledToolsPanel>
                {section.sectionIcons.map((icon, iconIndex) => (
                  <StyledImg
                    width="32px"
                    key={iconIndex}
                    src={icon}
                    alt={section.sectionTitle}
                    borderradius="0px"
                  />
                ))}
              </StyledToolsPanel>
            </React.Fragment>
          ))}
        </StyledInformationPanel>
      ))}
    </>
  );
}

export default InformationPanel;
