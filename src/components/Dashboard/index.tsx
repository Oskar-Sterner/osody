import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledDashboard } from './StyledDashboard';
import ManageProjectsPanel from './ManageProjectsPanel';
import ManageAboutPanel from './ManageAboutPanel';
import ManageClientPanel from './ManageClientPanel';
import ManageContentPanel from './ManageMailPanel';

function Dashboard() {
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('http://localhost:3001/api/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          if (response.status === 200) {
            setIsValidToken(true);
          }
        })
        .catch(error => {
          console.error('Authentication error:', error);
          setIsValidToken(false);
        });
    } else {
      setIsValidToken(false);
    }
  }, []);

  if (!isValidToken) {
    return <div>Please log in to view this content.</div>;
  }

  return (
    <>
      <StyledDashboard>
        <ManageProjectsPanel />
        <ManageAboutPanel />
        <ManageContentPanel />
        <ManageClientPanel />
      </StyledDashboard>
    </>
  );
}

export default Dashboard;
