import React, { useState, useEffect } from 'react';
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
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  SlidePrompt,
  Prompt
} from './EntryStyling';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [infoMessage, setInfoMessage] = useState('');
  const { signUp } = useUserAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setInfoMessage('');

    try {
      await signUp(email, password);
      setInfoMessage('Verification Email Sent');
      console.log(infoMessage);
    } catch (error) {
      setError(error.message);
      setInfoMessage('');
    }
  };

  useEffect(() => {
    const clearFields = setTimeout(() => {
      setEmail('');
      setPassword('');
      setError(null);
      setInfoMessage('');
    }, 4000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error, infoMessage]);

  return (
    <>
     <PageContainer>
      <NavigationBar />
       <SlideContainer>
        <SlideContent>
          <Slide>
            <FormWrap>
              <FormContent>
                <Form onSubmit={handleSignup}>
                  <FormTitle>Sign Up</FormTitle>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  {infoMessage && <Alert variant='info'>{infoMessage}</Alert>}
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    type='email'
                    placeholder='Please use Gmail, Outlook, or Yahoo'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                  />

                  <FormLabel>Password</FormLabel>
                  <FormInput
                    type='password'
                    placeholder='Enter password (at least 6 characters)'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required
                  />

                  <FormButton variant='primary' type='submit'>Sign Up</FormButton>
                  <SlidePrompt>
                    Already Have an Account?<Prompt to='/login'>Log In</Prompt>
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

export default SignupPage;