import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Alert } from 'react-bootstrap';
import ProfilePage from '../PrivatePages/ProfilePage';
import {
  PageContainer,
  SlideContainer,
  SlideContent,
  Slide,
  FormWrap,
  FormContent,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  SlidePrompt,
  Prompt
} from './EntryStyling';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(null);
        console.log(userCredential);
        setIsLoggedIn(true);
        navigate('/profile');
      })
      .catch((error) => {
        setError('Incorrect Email or Password.');
        console.log(error);
      });
  };

  if (isLoggedIn) {
    return <ProfilePage />;
  }

  return (
    <PageContainer>
      <SlideContainer>
        <SlideContent>
          <Slide>
            <FormWrap>
              <FormContent>
                <Form onSubmit={handleLogin}>
                  <FormTitle>Log In</FormTitle>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <FormLabel>Password</FormLabel>
                  <FormInput
                    type="password"
                    required
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormButton type="submit">Log In</FormButton>
                  <SlidePrompt>
                    New to PAX?
                    <Prompt to="/signup"> Create an account</Prompt>
                  </SlidePrompt>
                </Form>
              </FormContent>
            </FormWrap>
          </Slide>
        </SlideContent>
      </SlideContainer>
    </PageContainer>
  );
};

export default LoginPage;