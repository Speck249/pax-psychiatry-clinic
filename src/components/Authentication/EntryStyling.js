import { styled, css } from 'styled-components';


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
  margin-top: 1rem;
  background-color: yellow;
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
  ${ DisplayLayout };
  width: 500px;
  max-width: 100%;
  padding: 0.5rem 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  line-height: 2;
`;

export const Tagline = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  color: #09798c;
  text-transform: uppercase;
  margin: 0;
`;

export const Form = styled.form`
  width: 500px;
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
  margin: 0;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  font-weight: 700;
  padding: 0;
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

export const SharedButtonStyle = css`
  font-size: 14px;
  color: #fff;
  width: 100%;
  max-width: 100%;
  padding: 0.8rem 0;
  margin: 0.8rem 0;
  border: 0;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  ${DisplayLayout};
`;
export const Authenticate = styled.button`
  ${SharedButtonStyle}
  background-color: #09798C;
`;

export const GoogleSignIn = styled.button`
  display: flex;
  justify-content: center;
  gap: 10px;
  ${SharedButtonStyle}
  background-color: #000;
`;