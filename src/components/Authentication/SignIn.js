import React, { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
  GoogleSignIn
} from './EntryStyling';
import alternateLogo from "../../images/AlternateLogo.png";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    
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
    }, 10000);

    return () => {
      clearTimeout(clearFields);
    };
  }, [email, password, error]);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/profile');
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <AuthenticationSection>
      <LogoContainer>
        <RouterLink to="/">
          <Logo src={alternateLogo} width={132} height={125} alt="Pax Logo" />
        </RouterLink>
      </LogoContainer>
      <SectionHeader>
        {error && <Alert style={{ display:"block", textAlign: "center", fontSize: "0.85rem", fontWeight: "700", color: "000", border: "1px solid red", padding: "0.5rem 1rem", borderRadius: "4px"}} variant='danger'>{error}</Alert>}
        <SectionTitle>Sign In to PAX</SectionTitle>
        <Tagline>Restore Balance, Renew Your Life</Tagline>
      </SectionHeader>
      <Form onSubmit={handleLogin}>
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
            <Authenticate type="submit">Sign In</Authenticate>
            <hr />
            <GoogleSignIn onClick={handleGoogleSignIn}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" style={{ backgroundColor: "#000"}}>
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg> Sign In with Google </GoogleSignIn>
          </ButtonContainer>
          <RouterLink to="/signup" style={{ color: "#000", fontSize: "0.85rem", fontWeight: "700", textAlign: "right", textDecoration: "none", padding: "0.6rem 0.2rem"}}>Or Sign up for new account</RouterLink>
        </FormContent>
      </Form>
    </AuthenticationSection>
  );
};

export default SignIn;