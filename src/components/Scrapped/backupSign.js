import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../firebase';
import React, { useState, useEffect } from 'react';
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
  const [infoMessage, setInfoMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [signupStatus, setSignupStatus] = useState('');
  const [messageTimeout, setMessageTimeout] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    const allowedProviders = ['gmail.com', 'yahoo.com', 'outlook.com'];
    const emailProvider = email.split('@')[1]?.toLowerCase();

    if (!emailProvider || !allowedProviders.includes(emailProvider)) {
      setErrorMessage('Invalid Email Provider');
      setInfoMessage('');
      const timeoutId = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      setMessageTimeout(timeoutId);
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      setInfoMessage('');
      const timeoutId = setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      setMessageTimeout(timeoutId);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setErrorMessage(null);
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            setInfoMessage('Verification Email Sent');
            const timeoutId = setTimeout(() => {
              setInfoMessage('');
            }, 5000);
            setMessageTimeout(timeoutId);
            setEmail('');
            setPassword('');
          })
          .catch((error) => {
            setErrorMessage('Error Sending Verification Email');
            console.log(error);
          });
      })
      .catch((error) => {
        setErrorMessage('Error Creating Account');
        console.log(error);
      });
  };

  useEffect(() => {
    setSignupStatus(true);
    const timeoutId = setTimeout(() => {
      setSignupStatus(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

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
                  {infoMessage && <Alert variant='info'>{infoMessage}</Alert>}
                  {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    type='email'
                    required
                    placeholder='Please use Gmail, Outlook, or Yahoo'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <FormLabel>Password</FormLabel>
                  <FormInput
                    type='password'
                    required
                    placeholder='Enter password (at least 6 characters)'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormButton type='submit'>Sign Up</FormButton>
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