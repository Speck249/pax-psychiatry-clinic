import styled from 'styled-components';
import ContactImg from '../../images/ContactBg.jpg';

export const PageContainer = styled.div`
  background-image: url(${ContactImg});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding-top: 2.4rem; 
`;

export const FormContainer = styled.div`
  margin-top: 30px;
  padding-bottom: 62px;
  max-width: 960px;
  margin: 0 auto;

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
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const FormTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  padding-bottom: 20px;
  margin-top: -15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 60px 32px;
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

export const RequiredIndicator = styled.span`
   color: red;
   margin-bottom: 8px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 6rem;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormInput = styled.input`
  padding: 15px 16px;
  margin-bottom: 25px;
  border: none;
  border-radius: 8px;
`;

export const FormButton = styled.button`
   background-color: #09798C;
   color: #fff;
   outline: none;
   padding: 0.8rem 1rem;
   border-radius: 5px;
   border: none;
   font-size: 1rem;
   margin-top: 20px;
   margin-bottom: -5px;
   margin-right: 3px;
   cursor: pointer;
`;
