import { styled, css } from 'styled-components';

/** 
 * SignUp / SignIn Pages styling definition. 
 * Changes reflected in all authentication components.
 */


export const DisplayLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AuthenticationSection = styled.section`
  ${ DisplayLayout };
  width: 100%;
  height: 100vh;
  background-color: #f5f3f4;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  padding: 0;
  cursor: pointer;
`;

export const Logo = styled.img`
  ${ DisplayLayout };
  flex-direction: row;
  max-width: 150px;
  max-height: 150px;
  margin: 0;
`;

export const SectionHeader = styled.header`
  width: 400px;
  max-width: 100%;
  line-height: 2;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const Tagline = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #09798c;
  text-align: center;
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 400px;
  max-width: 100%;
  padding: 1rem 0.25rem;
  margin: 0.5rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem 0.5rem 0 0.5rem;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 700;
  margin: 0.25rem 0;
`;

export const FormInput = styled.input`
  font-size: 14px;
  font-weight: 700;
  padding: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &:active, &:focus-within {
    border: 1px solid #000;
  }
`;

export const ButtonContainer = styled.div`
  ${DisplayLayout};
`;

export const SharedButtonStyle = css`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 15px;
  width: 100%;
  max-width: 100%;
  margin: 0.25rem 0;
  outline: none;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const Authenticate = styled.button`
  ${SharedButtonStyle};
  padding: 1.2rem 0;
  border: none;
  border-radius: 4px;
  background-color: #09798c;
`;

export const SharedGoogleButtonStyle = css` 
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 1rem 0;
  border: 0.5px black solid;
  background-color: #000;
`

export const GoogleSignIn = styled.button`
 ${SharedButtonStyle};
 ${SharedGoogleButtonStyle};
`;

export const GoogleSignUp = styled.button`
 ${SharedButtonStyle};
 ${SharedGoogleButtonStyle};
`;