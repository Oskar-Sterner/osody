import { StyledH2 } from '../../../../../StyledElements/TextElements';
import {
  StyledMemberCard,
  StyledMemberPanel,
  StyledTeamPanel,
} from './StyledTeamPanel';
import { useGetTeamPanel } from '../../../../../../hooks/queries';

function TeamPanel() {
  const { teamPanel, loading, error } = useGetTeamPanel();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {teamPanel.map((panel, index) => (
        <StyledTeamPanel key={index}>
          <StyledH2>{panel.title}</StyledH2>
          <StyledMemberPanel>
            {panel.members.map((member, memberIndex) => (
              <StyledMemberCard key={memberIndex}>
                <img src={member.img} alt={member.name} />
                <p>{member.name}</p>
                <p>{member.role}</p>
              </StyledMemberCard>
            ))}
          </StyledMemberPanel>
        </StyledTeamPanel>
      ))}
    </>
  );
}

export default TeamPanel;
