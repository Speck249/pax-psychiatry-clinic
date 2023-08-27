import React from 'react';
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
} from './LogInStyling';

class LogInPage extends React.Component {
  state = {
    isSignUp: false,
  };

  toggleSlide = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  render() {
    const { isSignUp } = this.state;

    return (
      <PageContainer>
       <SlideContainer>
          <SlideContent isSignUp={isSignUp}>
          <Slide>
            <FormWrap>
            <FormContent>
              <Form>
              <FormTitle>Log In</FormTitle>
              <FormLabel>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton>Log In</FormButton>
              <SlidePrompt>New to PAX?<Prompt onClick={this.toggleSlide}>Create an account</Prompt></SlidePrompt>
              </Form>
              </FormContent>
              </FormWrap>
              </Slide>
            
            <Slide>
              <FormWrap>
                <FormContent>
              <Form>
              <FormTitle>Sign Up</FormTitle>
              <FormLabel>Full Name</FormLabel>
              <FormInput type='text' required></FormInput>
              <FormLabel>Email</FormLabel>
              <FormInput type='email' required></FormInput>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton>Sign Up</FormButton>
              <SlidePrompt>Already have an account?<Prompt onClick={this.toggleSlide}>Log In</Prompt></SlidePrompt>
              </Form>
                </FormContent>
              </FormWrap>
              </Slide>
          </SlideContent>
        </SlideContainer>
      </PageContainer>
    );
  }
}

export default LogInPage;