import styled from 'styled-components';
import LogInImg from '../../images/LogInBg.jpg'
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
 background-image: url(${LogInImg});
 background-size: cover;
 background-repeat: no-repeat;
 height: 100vh;
`;

export const SlideContainer = styled.div`
  background-color: transparent;
  margin: 0 auto;
  width: 450px;
  height: 600px;
  overflow: hidden;
  cursor: pointer;
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  width: 200%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  /*transform: ${({ isSignUp }) => (isSignUp ? 'translateX(-50%)' : 'translateX(0)')};*/
`;

export const Slide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  padding-top: -25px;
  background-color: transparent;
  backdrop-filter: blur(25px);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
     height: 80%;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;

export const FormTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  color: #09798C;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 35px 30px;
  margin-top: 4rem;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  text-align: left;
  color: #000;
`;

export const FormInput = styled.input`
  padding: 14px 16px;
  width: 350px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
`;

export const FormButton = styled.button`
   width: 100%;
   padding: 10px 10px;
   border-radius: 8px;
   border: none;
   margin-top: 8px;
   color: #fff;
   font-size: 15px;
   background-color: #09798C;
   cursor: pointer;
`;

export const SlidePrompt = styled.h3`
  display: flex; 
  align-items: center;
  margin-top: 20px;
  margin-left: 3rem;
  margin-right: 30px;
  font-size: 14px;
  color: #09798C;
`;

export const Prompt = styled(Link)`
  white-space: nowrap;
  margin-left: 6px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
`;