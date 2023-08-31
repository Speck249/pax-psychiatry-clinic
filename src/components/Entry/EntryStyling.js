import styled from 'styled-components';
import LogInImg from '../../images/LogInBg.jpg'
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
 background-image: url(${LogInImg});
 background-size: cover;
 background-repeat: no-repeat;
 padding-top: 3rem;
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
  height: 110%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isSignUp }) => (isSignUp ? 'translateX(-50%)' : 'translateX(0)')};
`;

export const Slide = styled.div`
  background-color: transparent;
  backdrop-filter: blur(25px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  padding-top: -25px;
  width: 50%;
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
  font-size: 35px;
  font-weight: bold;
  color: #09798C;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 35px 30px;
  margin-top: 4rem;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const FormLabel = styled.label`
  text-align: left;
  font-size: 14px;
  color: #000;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  padding: 14px 16px;
  width: 350px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
`;

export const FormButton = styled.button`
   background-color: #09798C;
   color: #fff;
   padding: 10px 10px;
   border-radius: 8px;
   border: none;
   font-size: 15px;
   margin-top: 8px;
   cursor: pointer;
   width: 100%;
`;

export const SlidePrompt = styled.h3`
  font-size: 12px;
  color: #000;
  margin-top: 20px;
  margin-left: 5rem;
  margin-right: 30px;
  display: flex; 
  align-items: center;
`;

export const Prompt = styled(Link)`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  margin-left: 4px;
  text-decoration: none;
`;

export const Paragraph = styled.p`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 13px;
`;