import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Alert } from 'react-bootstrap';
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
import NavigationBar from '../Navbar/Navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      console.log(userCredential);

      const timeoutId = setTimeout(() => {
        setEmail('');
        setPassword('');
        navigate('/profile');
      }, 5000);

      return () => clearTimeout(timeoutId);
    } catch (error) {
      setError('Incorrect Email or Password.');
      console.log(error);

      const timeoutId = setTimeout(() => {
        setError(null);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  };

  return (
    <>
    <PageContainer>
      <NavigationBar />
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
                    New to PAX? <Prompt to="/signup">Create an account</Prompt>
                  </SlidePrompt>
                </Form>
              </FormContent>
            </FormWrap>
          </Slide>
        </SlideContent>
      </SlideContainer>
    </PageContainer>
    </>
  );
};

export default LoginPage;