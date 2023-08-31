import React, { useState, useEffect } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const ProfilePage = () => {
  const [message, setInfomessage] = useState('');
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setInfomessage('Logged out. Come back soon!');
        console.log(message);
      })
      .catch((error) => {
        setError('Error Logging Out');
        console.log(error);
      });
  };

  const renderLogoutButton = () => {
    return (
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    );
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <h1>Profile</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser && currentUser.email}
          <Link to="/update-profile">Update Profile</Link>
        </Card.Body>
      </Card>
      {currentUser && renderLogoutButton()}
    </>
  );
};

export default ProfilePage;