import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/userAuthContext';
import { Alert } from 'react-bootstrap';
import NavigationBar from '../Navbar/Navigation';
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
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await logIn(email, password);
      navigate('/profile');
    } catch (error) {
      setError('Incorrect Email or Password.');
      console.log(error);
    }
  };

  useEffect(() => {
    const clearFields = setTimeout(() => {
      setEmail('');
      setPassword('');
      setError('');
    }, 5000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error]);


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
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                  />

                  <FormLabel>Password</FormLabel>
                  <FormInput
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required
                  />
                  <FormButton variant='primary' type="submit">Log In</FormButton>

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