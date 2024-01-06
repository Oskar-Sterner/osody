export type MemberType = {
  img: string;
  name: string;
  role: string;
};

export type TeamPanelType = {
  title: string;
  members: MemberType[];
};

const TeamPanel: TeamPanelType[] = [
  {
    title: 'Our Team',
    members: [
      {
        img: 'url-to-image-1',
        name: 'Member 1',
        role: 'Role 1',
      },
      {
        img: 'url-to-image-2',
        name: 'Member 2',
        role: 'Role 2',
      },
      {
        img: 'url-to-image-3',
        name: 'Member 3',
        role: 'Role 3',
      },
      {
        img: 'url-to-image-4',
        name: 'Member 4',
        role: 'Role 4',
      },
      {
        img: 'url-to-image-5',
        name: 'Member 5',
        role: 'Role 5',
      },
    ],
  },
];

export default TeamPanel;
