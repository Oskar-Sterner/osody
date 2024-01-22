import { StyledH2 } from '../../../../../StyledElements/TextElements';
import { StyledTeamPanel } from './StyledTeamPanel';
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
          {panel.members.map((member, memberIndex) => (
            <div key={memberIndex}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
              <p>{member.role}</p>
            </div>
          ))}
        </StyledTeamPanel>
      ))}
    </>
  );
}

export default TeamPanel;
