import styled from 'styled-components';
import ContactImg from '../../images/ContactBg.jpg';
import '../../fonts/webfont.css';

export const PageContainer = styled.div`
  background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${ContactImg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 2rem; 
`;

export const FormContainer = styled.div`
  padding-bottom: 50px;
  max-width: 650px;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 650px) {
    max-width: 90%;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
     height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 60px 30px;
  border-radius: 4px;
  background-color: #000;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const FormTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: #fff;
  padding-bottom: 28px;
  margin-top: -5px;
  margin-bottom: 0.5rem;
`;

export const RequiredIndicator = styled.span`
   color: red;
   margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
`;

export const FormInput = styled.input`
  padding: 10px 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  margin-bottom: 20px;
  width: 85%;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  margin-bottom: 25px;
  width: 85%;
;`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormButton = styled.button`
   width: 30%;
   background-color: #09798C;
   color: #fff;
   outline: none;
   padding: 0.7rem;
   border-radius: 4px;
   border: none;
   font-size: 1rem;
   margin-top: -5px;
   margin-bottom: -20px;
   cursor: pointer;
`;
