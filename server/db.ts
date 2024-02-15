import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

type Project = {
  title: string;
  description: string;
  link: string;
  bg: string;
};

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'Description 1',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
  {
    title: 'Project 4',
    description: 'Description 4',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
  {
    title: 'Project 5',
    description: 'Description 5',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
  {
    title: 'Project 6',
    description: 'Description 6',
    link: '#',
    bg: 'https://i.imgur.com/2axkMXg.png',
  },
];

export type Content = {
  title: string;
  description: string;
  img?: string;
};

const ChosenContent: Content[] = [
  {
    title: 'Projects',
    description:
      'Here are some of the projects we have been working on. Please feel free to click on a panel/pane to explore each project and learn more about what we do, how we do it, and why we do it.',
  },
  {
    title: 'About',
    description: '',
    img: 'https://i.imgur.com/Nk54FgU.gif',
  },
  {
    title: 'Mail',
    description: `Got a business idea or a project in mind? We're here to listen. 
    Send us your ideas, questions, or thoughts, and we'll get back to you promptly. 
    Let's make great things happen together!`,
  },
  {
    title: 'Clients',
    description:
      'Curious about who we have been wortking with? Explore some of our beloved clients we have partnered with over the years and see the projects we have undertaken together.',
  },
  {
    title: 'Dashboard',
    description:
      'Here is the admin dashboard where you can manage your projects, clients, and other content on the site!',
  },
];

export type ClientPanel = {
  title: string;
  description: string;
  link: string;
  bg: string;
};

const ClientPanels: ClientPanel[] = [
  {
    title: 'HST - Agency',
    description: 'Logo and other graphics - July 10, 2023',
    link: '#',
    bg: 'https://i.imgur.com/oVVRofU.png',
  },
  {
    title: 'Hidden Marketplace',
    description: 'Animations and designs - February 1, 2023',
    link: '#',
    bg: 'https://i.imgur.com/TwSCZ9j.gif',
  },
  {
    title: 'Abou - Streamer',
    description: 'Logo and other stream-elements - July 10, 2023',
    link: '#',
    bg: 'https://i.imgur.com/OV2kQhv.png',
  },
  {
    title: 'Grimhaven',
    description: 'Trailer and other graphical elements - December 14, 2023',
    link: '#',
    bg: 'https://i.imgur.com/nEG9n7l.png',
  },
  {
    title: 'OSODY STUDIOS',
    description: 'Fullstack website with all the graphics - January 1, 2024',
    link: '#',
    bg: 'https://imgur.com/Wqt1bCD.png',
  },
  {
    title: 'SteamSets',
    description: 'Animations and designs - March 19, 2023',
    link: '#',
    bg: 'https://imgur.com/18HvM5r.png',
  },
];

export type InformationPanelType = {
  title: string;
  description: string;
  sections: {
    sectionTitle: string;
    sectionContent: string;
    sectionIcons: string[];
  }[];
};

const InformationPanel: InformationPanelType[] = [
  {
    title: 'Who we are',
    description:
      'At Osody Studios, we are more than just developers. We are "visioneers" who possess an unwavering passion for turning ideas into realities using the enchantment of coding. Our approach is rooted in the understanding that visualizing concepts with exceptional creativity allows us to establish a deep and meaningful connection with our clients.',
    sections: [
      {
        sectionTitle: 'What we use',
        sectionContent: 'IDEs',
        sectionIcons: [
          'https://i.imgur.com/JbZWkJb.png',
          'https://i.imgur.com/yrQUoAw.png',
          'https://i.imgur.com/iF6uGNr.png',
        ],
      },
      {
        sectionTitle: 'Languages & Frameworks',
        sectionContent: 'Languages',
        sectionIcons: [
          'https://i.imgur.com/00iBluo.png',
          'https://i.imgur.com/YjHZKmM.png',
          'https://i.imgur.com/yd3LBsH.png',
          'https://i.imgur.com/UXIdfQe.png',
          'https://i.imgur.com/EIEic7t.png',
          'https://i.imgur.com/5XouCN8.png',
          'https://i.imgur.com/tRmP3H8.png',
          'https://i.imgur.com/mVSWVIl.png',
          'https://i.imgur.com/PD7Uu0D.png',
        ],
      },
      {
        sectionTitle: 'Editing & Design',
        sectionContent: 'Editing',
        sectionIcons: [
          'https://i.imgur.com/mdzFPbv.png',
          'https://i.imgur.com/r2qEM4W.png',
          'https://i.imgur.com/NVmsCBY.png',
        ],
      },
    ],
  },
];

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
        img: 'https://img.freepik.com/free-photo/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background_1258-80180.jpg',
        name: 'Member 1',
        role: 'Role 1',
      },
      {
        img: 'https://img.freepik.com/free-photo/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background_1258-80180.jpg',
        name: 'Member 2',
        role: 'Role 2',
      },
      {
        img: 'https://img.freepik.com/free-photo/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background_1258-80180.jpg',
        name: 'Member 3',
        role: 'Role 3',
      },
      {
        img: 'https://img.freepik.com/free-photo/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background_1258-80180.jpg',
        name: 'Member 4',
        role: 'Role 4',
      },
      {
        img: 'https://img.freepik.com/free-photo/portrait-cheerful-attractive-handsome-businessman-holding-hands-with-confident-face-looking-camera-standing-grey-background_1258-80180.jpg',
        name: 'Member 5',
        role: 'Role 5',
      },
    ],
  },
];

export async function createAdminAccount(client: MongoClient): Promise<void> {
  const password = process.env.A_ACCOUNT_PASS || '';
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    await client.connect();
    const database = client.db('accounts');
    const collection = database.collection('a_accounts');
    const existingAccount = await collection.findOne({ username: 'Atlas' });
    if (!existingAccount) {
      await collection.insertOne({
        username: 'Atlas',
        password: hashedPassword,
      });
      console.log('🟢 Admin account created successfully!');
    } else {
      console.log('🟠 Admin account already exists!');
    }
  } finally {
    await client.close();
  }
}

export async function checkCredentials(
  client: MongoClient,
  username: string,
  password: string
): Promise<boolean> {
  try {
    await client.connect();
    const database = client.db('accounts');
    const collection = database.collection('a_accounts');
    const user = await collection.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return true;
    }
    return false;
  } finally {
    await client.close();
  }
}

export async function updateTeamPanel(client: MongoClient): Promise<void> {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection<TeamPanelType>('TeamPanel');
    const existingTeamPanels = await collection.find().toArray();

    for (let i = 0; i < TeamPanel.length; i++) {
      const teamPanel = TeamPanel[i];

      if (existingTeamPanels.length > i) {
        const existingTeamPanel = existingTeamPanels[i];
        let isUpdateNeeded = false;
        const updates: Partial<TeamPanelType> = {};

        if (existingTeamPanel.title !== teamPanel.title) {
          updates.title = teamPanel.title;
          isUpdateNeeded = true;
        }

        if (
          JSON.stringify(existingTeamPanel.members) !==
          JSON.stringify(teamPanel.members)
        ) {
          updates.members = teamPanel.members;
          isUpdateNeeded = true;
        }

        if (isUpdateNeeded) {
          await collection.updateOne(
            { _id: existingTeamPanel._id },
            { $set: updates }
          );
          console.log(
            `🟠 Updated team panel: index ${i} 🔑 Keys that have been updated: ${Object.keys(
              updates
            ).join(', ')}`
          );
        }
      } else {
        await collection.insertOne(teamPanel);
        console.log(
          `🟢 Created new team panel: ${teamPanel.title} at index ${i}`
        );
      }
    }
  } finally {
    await client.close();
  }
}

export async function updateInformationPanel(
  client: MongoClient
): Promise<void> {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection =
      database.collection<InformationPanelType>('InformationPanel');
    const existingInformationPanel = await collection.find().toArray();

    for (let i = 0; i < InformationPanel.length; i++) {
      const infoPanel = InformationPanel[i];

      if (existingInformationPanel.length > i) {
        const existingInfoPanel = existingInformationPanel[i];
        let isUpdateNeeded = false;
        const updates: Partial<InformationPanelType> = {};

        (['title', 'description'] as const).forEach(key => {
          if (existingInfoPanel[key] !== infoPanel[key]) {
            updates[key] = infoPanel[key];
            isUpdateNeeded = true;
          }
        });

        if (
          JSON.stringify(existingInfoPanel.sections) !==
          JSON.stringify(infoPanel.sections)
        ) {
          updates.sections = infoPanel.sections;
          isUpdateNeeded = true;
        }

        if (isUpdateNeeded) {
          await collection.updateOne(
            { _id: existingInfoPanel._id },
            { $set: updates }
          );
          console.log(
            `🟠 Updated information panel: index ${i} 🔑 Keys that have been updated: ${Object.keys(
              updates
            ).join(', ')}`
          );
        }
      } else {
        await collection.insertOne(infoPanel);
        console.log(
          `🟢 Created new information panel: ${infoPanel.title} at index ${i}`
        );
      }
    }
  } finally {
    await client.close();
  }
}

export async function updateClientPanels(client: MongoClient): Promise<void> {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection<ClientPanel>('ClientPanels');
    const existingClientPanels = await collection.find().toArray();

    for (let i = 0; i < ClientPanels.length; i++) {
      const clientPanel = ClientPanels[i];

      if (existingClientPanels.length > i) {
        const existingClientPanel = existingClientPanels[i];
        const updates = Object.entries(clientPanel).reduce(
          (acc, [key, value]) => {
            if (existingClientPanel[key as keyof ClientPanel] !== value) {
              acc[key as keyof ClientPanel] = value;
            }
            return acc;
          },
          {} as Partial<ClientPanel>
        );

        if (Object.keys(updates).length > 0) {
          await collection.updateOne(
            { _id: existingClientPanel._id },
            { $set: updates }
          );
          console.log(
            `🟠 Updated client panel: index ${i} 🔑 Keys that have been updated: ${Object.keys(
              updates
            ).join(', ')}`
          );
        }
      } else {
        await collection.insertOne(clientPanel);
        console.log(
          `🟢 Created new client panel: ${clientPanel.title} at index ${i}`
        );
      }
    }
  } finally {
    await client.close();
  }
}

export async function updateChosenContent(client: MongoClient): Promise<void> {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection<Content>('ChosenContent');
    const existingChosenContents = await collection.find().toArray();

    for (let i = 0; i < ChosenContent.length; i++) {
      const chosenContent = ChosenContent[i];

      if (existingChosenContents.length > i) {
        const existingChosenContent = existingChosenContents[i];
        const updates = Object.entries(chosenContent).reduce(
          (acc, [key, value]) => {
            if (existingChosenContent[key as keyof Content] !== value) {
              acc[key as keyof Content] = value;
            }
            return acc;
          },
          {} as Partial<Content>
        );

        if (Object.keys(updates).length > 0) {
          await collection.updateOne(
            { _id: existingChosenContent._id },
            { $set: updates }
          );
          console.log(
            `🟠 Updated chosen content: index ${i} 🔑 Keys that have been updated: ${Object.keys(
              updates
            ).join(', ')}`
          );
        }
      } else {
        await collection.insertOne(chosenContent);
        console.log(
          `🟢 Created new content: ${chosenContent.title} at index ${i}`
        );
      }
    }
  } finally {
    await client.close();
  }
}

export async function updateProject(client: MongoClient): Promise<void> {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection<Project>('ProjectPanels');
    const existingProjects = await collection.find().toArray();

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      if (existingProjects.length > i) {
        const existingProject = existingProjects[i];
        const updates = Object.entries(project).reduce((acc, [key, value]) => {
          if (existingProject[key as keyof Project] !== value) {
            acc[key as keyof Project] = value;
          }
          return acc;
        }, {} as Partial<Project>);

        if (Object.keys(updates).length > 0) {
          await collection.updateOne(
            { _id: existingProject._id },
            { $set: updates }
          );
          console.log(
            `🟠 Updated project: index ${i} 🔑 Keys that have been updated: ${Object.keys(
              updates
            ).join(', ')}`
          );
        }
      } else {
        await collection.insertOne(project);
        console.log(`🟢 Created new project: ${project.title} at index ${i}`);
      }
    }
  } finally {
    await client.close();
  }
}
