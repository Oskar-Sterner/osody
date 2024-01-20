import { MongoClient } from 'mongodb';

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

export async function updateProjects(client: MongoClient): Promise<void> {
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
