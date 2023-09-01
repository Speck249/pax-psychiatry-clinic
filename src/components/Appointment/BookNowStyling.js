import styled from 'styled-components';
import BookImg from '../../images/AppointmentBg.jpg';

export const PageContainer = styled.div`
  width: 70%;
  background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${BookImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.div`
  width: 87%;
  height: 100%;
  margin-left: 48rem;
  margin-top: -56px;
  margin-bottom: -10px;

  @media screen and (max-width: 650px) {
    max-width: 90%;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
     height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const FormTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-align: center;
  color: #000;
  padding-bottom: 8px;
  padding-top: 8px;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 50px 30px;
  background-color: #e6e6e6;
  /*background-color: #09798C;*/
  max-width: 600px;
  height: 100%;
  width: 100%;
  z-index: 1;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const RequiredIndicator = styled.span`
   color: red;
   margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #000;
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
   background-color: #000;
   color: #fff;
   outline: none;
   padding: 0.7rem 1rem;
   border-radius: 4px;
   border: none;
   font-size: 1rem;
   margin-top: -5px;
   margin-bottom: -20px;
   cursor: pointer;
`;
