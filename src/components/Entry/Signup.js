import { createUserWithEmailAndPassword, sendEmailVerification, currentUser } from 'firebase/auth';
import { auth } from '../../firebase';
import React, { useState } from 'react';
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
import { Alert } from 'react-bootstrap';
import NavigationBar from '../Navbar/Navigation';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setInfomessage] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError(null);
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            setInfomessage('Verification Email Sent');
            console.log(message)
          })
          .catch((error) => {
             setError('Error Sending Verification Email')
             console.log(error);
          });
      }) 
      .catch((error) => {
        setError('Error Creating Account')
        console.log(error);
      });
  };

    return (
      <PageContainer>
      <NavigationBar />
       <SlideContainer>
          <SlideContent>
          <Slide>
            <FormWrap>
            <FormContent>
              <Form onSubmit={handleSignup}>
              <FormTitle>Sign Up</FormTitle>
              {message && <Alert variant='info'>{message}</Alert>}
              <FormLabel>Email</FormLabel>
              <FormInput
               type='email' required
               placeholder='Enter your email'
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>

              <FormLabel>Password</FormLabel>
              <FormInput
               type='password' required
               placeholder='Enter password (at least 6 characters)'
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>

              <FormButton type='submit'>Sign Up</FormButton>
              <SlidePrompt>Already Have an Account?<Prompt to='/login'>Log In</Prompt></SlidePrompt>
              </Form>
            </FormContent>
          </FormWrap>
        </Slide>
      </SlideContent>
    </SlideContainer>
  </PageContainer>
 );
};

export default SignupPage;