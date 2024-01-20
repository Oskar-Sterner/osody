import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import { updateProjects } from './db';

dotenv.config();

const app = express();
app.use(cors());

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get('/api/project-panels', async (_req, res) => {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('ProjectPanels');
    const projectPanels = await collection.find().toArray();
    console.log(projectPanels);
    res.json(projectPanels);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching project panels' });
  }
});

app.listen(3001, async () => {
  console.log('Server is running on port 3001');
  await updateProjects(client);
});
