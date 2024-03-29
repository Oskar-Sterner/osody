import { useEffect, useState } from 'react';

export interface ProjectPanel {
  title: string;
  description: string;
  link: string;
  bg: string;
}

export function useGetProjectPanels() {
  const [projectPanels, setProjectPanels] = useState<ProjectPanel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/project-panels')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjectPanels(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { projectPanels, loading, error };
}

export function useUpdateProjectPanels() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateProjectPanels = async (panels: ProjectPanel[]) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/project-panels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(panels),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoading(false);
    } catch (e) {
      setError(error);
      setLoading(false);
    }
  };

  return { updateProjectPanels, loading, error };
}

export interface ChosenContent {
  title: string;
  description: string;
  img?: string;
}

export function useGetChosenContent() {
  const [chosenContent, setChosenContent] = useState<ChosenContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/chosen-content')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setChosenContent(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { chosenContent, loading, error };
}

export function useUpdateChosenContent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateChosenContent = async (contents: ChosenContent[]) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/chosen-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contents),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoading(false);
    } catch (e) {
      setError(error);
      setLoading(false);
    }
  };

  return { updateChosenContent, loading, error };
}

export type ClientPanel = {
  title: string;
  description: string;
  link: string;
  bg: string;
};

export function useGetClientPanels() {
  const [clientPanels, setClientPanels] = useState<ClientPanel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/client-panels')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: ClientPanel[]) => {
        setClientPanels(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { clientPanels, loading, error };
}

export type InformationPanelType = {
  title: string;
  description: string;
  sections: {
    sectionTitle: string;
    sectionContent: string;
    sectionIcons: string[];
  }[];
};

export function useGetInformationPanel() {
  const [informationPanel, setInformationPanel] = useState<
    InformationPanelType[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/information-panel')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: InformationPanelType[]) => {
        setInformationPanel(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { informationPanel, loading, error };
}

export type MemberType = {
  img: string;
  name: string;
  role: string;
};

export type TeamPanelType = {
  title: string;
  members: MemberType[];
};

export function useGetTeamPanel() {
  const [teamPanel, setTeamPanel] = useState<TeamPanelType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/team-panel')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: TeamPanelType[]) => {
        setTeamPanel(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return { teamPanel, loading, error };
}

export function useUpdateTeamPanel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateTeamPanel = async (panel: TeamPanelType[]) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/team-panel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(panel),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoading(false);
    } catch (e) {
      setError(e as Error);
      setLoading(false);
    }
  };

  return { updateTeamPanel, loading, error };
}

export function useUpdateClientPanels() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateClientPanels = async (panels: ClientPanel[]) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/client-panels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(panels),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoading(false);
    } catch (e) {
      setError(e as Error);
      setLoading(false);
    }
  };

  return { updateClientPanels, loading, error };
}

export function useUpdateInformationPanel() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateInformationPanel = async (panel: InformationPanelType[]) => {
    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:3001/api/information-panel',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(panel),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoading(false);
    } catch (e) {
      setError(e as Error);
      setLoading(false);
    }
  };

  return { updateInformationPanel, loading, error };
}
