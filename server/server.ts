import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
import {
  updateChosenContent,
  updateClientPanels,
  updateInformationPanel,
  updateProject,
  updateTeamPanel,
} from './db';

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
    res.json(projectPanels);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching project panels' });
  }
});

app.get('/api/chosen-content', async (_req, res) => {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('ChosenContent');
    const chosenContent = await collection.find().toArray();
    res.json(chosenContent);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching chosen content' });
  }
});

app.get('/api/client-panels', async (_req, res) => {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('ClientPanels');
    const clientPanels = await collection.find().toArray();
    res.json(clientPanels);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching client panels' });
  }
});

app.get('/api/information-panel', async (_req, res) => {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('InformationPanel');
    const InformationPanel = await collection.find().toArray();
    res.json(InformationPanel);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching information panel' });
  }
});

app.get('/api/team-panel', async (_req, res) => {
  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('TeamPanel');
    const TeamPanel = await collection.find().toArray();
    res.json(TeamPanel);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching team panel' });
  }
});

app.listen(3001, async () => {
  console.log('Server is running on port 3001');
  await updateProject(client);
  await updateChosenContent(client);
  await updateClientPanels(client);
  await updateInformationPanel(client);
  await updateTeamPanel(client);
});
