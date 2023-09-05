import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from '../../context/userAuthContext';
import {
  PageContainer, 
  CardContainer,
  CardContent,
  CardTitle,
  CardBody,
  Card,
  Button
} from './ProfileStyling';
import NavigationBar from '../Navbar/Navigation';

const ProfilePage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);


  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError('Error Logging Out.')
      console.log(error);
    }
  };

  return (
    <>
    <PageContainer>
      <NavigationBar />
      <CardContainer>
          <Card>
              <CardContent>
            <CardTitle>Welcome!</CardTitle>
          {error && <Alert variant="danger">{error}</Alert>}
          <CardBody>Logged in as {user && user.email}</CardBody>
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </CardContent>
        </Card>
        </CardContainer>
      </PageContainer>
    </>
  );
};

export default ProfilePage;