import styled from 'styled-components';
import BookImg from '../../images/AppointmentBg.jpg';
import '../../fonts/webfont.css';

export const PageContainer = styled.div`
  width: 58%;
  background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${BookImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

   @media screen and (max-width: 768px) {
    height: 210vh;
    width: 100%
  }
`;

export const FormContainer = styled.div`
  width: 78%;
  height: 100%;
  padding-left: 3rem;
  padding-right: 1rem;
  margin-left: 50rem;
  margin-top: -80px;
  margin-bottom: -30px;

  @media screen and (max-width: 768px) {
    max-width: 1200;
    width: 100%;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: black;

  @media screen and (max-width: 480px) {
     height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: yellow;

  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background-color: purple;
  max-width: 700px;
  height: 100%;
  width: 100%;
  z-index: 1;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: -50px;
    padding-right: -30px;
  };
`;

export const FormTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;
  color: #000;
  margin-right: 1.8rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  background-color: green;
`;

export const RequiredIndicator = styled.span`
   color: red;
   margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #000;
  margin-bottom: 0.3rem;
  margin-left: 2rem;
`;

export const FormInput = styled.input`
  padding: 10px 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  margin-bottom: 22px;
  width: 85%;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  margin-bottom: 20px;
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
   background-color: #000;
   color: #fff;
   outline: none;
   padding: 0.7rem 1rem;
   border-radius: 4px;
   border: none;
   font-size: 1rem;
   margin-top: -10px;
   margin-bottom: -30px;
   cursor: pointer;
`;
