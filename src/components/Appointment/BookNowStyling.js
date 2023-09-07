import styled from 'styled-components';
import BookImg from '../../images/AppointmentBg.jpg';
import '../../fonts/webfont.css';

export const PageContainer = styled.div`
  width: 70%;
  height: 100vh;
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${BookImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  margin-top: -95px;
  margin-left: 56rem;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
  margin-top: 10px;
  z-index: 1;
  background-color: #e6e6e6;
`;

export const FormTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 30px;
  text-align: center;
  color: #000;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const RequiredIndicator = styled.span`
  color: red;
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
  width: 85%; border: none;
  border-radius: 4px;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 2rem;
  margin-bottom: 15px;
  width: 85%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
`;