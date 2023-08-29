import React, { useState } from 'react';
import { CreateUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
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

const SignupPage = ({ toggleSlide }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    CreateUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        console.log(userCredential);
    })
     .catch((error) => {
      console.log(error);
     });
};

    return (
      <PageContainer>
       <SlideContainer>
          <SlideContent>
          <Slide>
            <FormWrap>
            <FormContent>
              <Form>
              <FormTitle>Log In</FormTitle>
              <FormLabel>Email</FormLabel>
              <FormInput
               type='email' required
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>

              <FormLabel>Password</FormLabel>
              <FormInput
               type='password' required
               value={password}
               onChange={(e) => setPassword(e.target.value)}/>

              <FormButton type='submit' onClick={handleSignup}>Sign Up</FormButton>
              <SlidePrompt>New to PAX?<Prompt onClick={toggleSlide}>Create an account</Prompt></SlidePrompt>
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