import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import { Alert } from "react-bootstrap";
import {
  AuthenticationSection,
  LogoContainer,
  Logo,
  SectionHeader,
  SectionTitle,
  Tagline,
  Form, 
  FormContent,
  FormLabel,
  FormInput,
  ButtonContainer,
  Authenticate,
} from './EntryStyling';
import alternateLogo from "../../images/AlternateLogo.png";


const Signup = () => {
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
    }, 10000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error, infoMessage]);


  return (
    <AuthenticationSection>
      <LogoContainer>
        <RouterLink to="/">
          <Logo src={alternateLogo} width={132} height={125} alt="Pax Logo" />
        </RouterLink>
      </LogoContainer>
      <SectionHeader>
        <SectionTitle>Create New Account</SectionTitle>
        <Tagline>Restore Balance, Renew Your Life</Tagline>
      </SectionHeader>
      <Form onSubmit={handleSignup}>
        {error && <Alert style={{ display:"block", textAlign: "center", fontSize: "0.85rem", fontWeight: "700", color: "#000", border: "1px solid red", padding: "0.5rem 1rem", borderRadius: "4px"}} variant='danger'>{error}</Alert>}
        {infoMessage && <Alert style={{ display:"block", textAlign: "center",  fontSize: "0.85rem", fontWeight: "700", color: "#000", border: "1px solid green", padding: "0.5rem 1rem", borderRadius: "4px"}} variant='info'>{infoMessage}</Alert>}
        <FormContent>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput 
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            autoComplete='on' /> 
          <FormLabel htmlFor='pwd'>Password</FormLabel>
          <FormInput 
            id='pwd' 
            type='password' 
            value={password}
            minLength={8}
            maxLength={12}
            size={12}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <ButtonContainer>
            <p style={{ fontSize: "0.85rem", padding: "1rem"}}>By signing up, you agree to our <RouterLink to="" style={{ color: "#09798C"}}>Terms of Use</RouterLink></p>
            <Authenticate type="submit">Sign Up</Authenticate>
          </ButtonContainer>
          <RouterLink to="/signin" style={{ color: "#000", fontSize: "0.85rem", fontWeight: "700", textAlign: "right", textDecoration: "none", padding: "0.6rem 0.2rem"}}>Or Sign in to existing account</RouterLink>
        </FormContent>
      </Form>
    </AuthenticationSection>
  );
};

export default Signup;