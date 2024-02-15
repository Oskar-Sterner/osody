declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { ChosenContent, ProjectPanel } from '../src/hooks/queries';
import { MongoClient, ServerApiVersion } from 'mongodb';
import jwt, { JwtPayload } from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import {
  checkCredentials,
  createAdminAccount,
  updateChosenContent,
} from './db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) return res.sendStatus(403);

    req.user = decoded as JwtPayload;
    next();
  });
};

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

app.post('/api/chosen-content', async (req, res) => {
  const contents = req.body;

  const updateData = async (contents: ChosenContent[]) => {
    const database = client.db('utils');
    const collection = database.collection('ChosenContent');

    await collection.deleteMany({});

    await collection.insertMany(contents);
  };

  try {
    await updateData(contents);
    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the data');
  }
});

app.post('/api/project-panels', async (req, res) => {
  const panels = req.body;

  const updateData = async (panels: ProjectPanel[]) => {
    const database = client.db('utils');
    const collection = database.collection('ProjectPanels');

    await collection.deleteMany({});

    await collection.insertMany(panels);
  };

  try {
    await updateData(panels);
    res.status(200).send('Data updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the data');
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

app.post('/api/client-panels', async (req, res) => {
  const clientPanels = req.body;

  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('ClientPanels');

    await collection.deleteMany({});

    await collection.insertMany(clientPanels);

    res.status(200).send('Client Panels updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the Client Panels');
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

app.post('/api/team-panel', async (req, res) => {
  const teamPanel = req.body;

  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('TeamPanel');

    await collection.deleteMany({});
    await collection.insertMany(teamPanel);

    res.status(200).send('Team panel updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while updating the team panel');
  }
});

app.post('/api/information-panel', async (req, res) => {
  const informationPanel = req.body;

  try {
    await client.connect();
    const database = client.db('utils');
    const collection = database.collection('InformationPanel');

    await collection.deleteMany({});
    await collection.insertMany(informationPanel);

    res.status(200).send('Information Panel updated successfully');
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send('An error occurred while updating the Information Panel');
  }
});

app.post('/api/check-credentials', async (req, res) => {
  const { username, password } = req.body;
  const valid = await checkCredentials(client, username, password);
  if (valid) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    res.json({ success: true, token: token });
  } else {
    res.status(401).json({ success: false });
  }
});

app.get('/api/protected-route', authenticateToken, async (_req, res) => {
  try {
    res.json({ message: 'This is a protected route' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3001, async () => {
  console.log('🟢 Server is running on port 3001');
  await createAdminAccount(client);
  // await updateProject(client);
  await updateChosenContent(client);
  // await updateClientPanels(client);
  // await updateInformationPanel(client);
  // await updateTeamPanel(client);
});
