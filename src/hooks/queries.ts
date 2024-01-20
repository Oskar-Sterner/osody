import { useEffect, useState } from 'react';

interface ProjectPanel {
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
