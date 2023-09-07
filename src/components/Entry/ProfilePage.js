import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';
import Dashboard from '../Dashboard/Dashboard';
import { PageContainer, Button } from './ProfileStyling';

const ProfilePage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      setError('Error Logging Out.');
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <Dashboard />
      {error && <Alert variant="danger">{error}</Alert>}
      <Button to="/" onClick={handleLogout}>Log Out</Button>
    </PageContainer>
  );
};

export default ProfilePage;