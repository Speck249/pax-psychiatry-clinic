import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

// Social Media Icons
// Web Breakpoints
export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  height: 55vh;
  background-color: #000;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const NewsletterTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 1.8;
`;

export const NewsletterBody = styled.h3`
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #e6e6e6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FormLabel = styled.label`
   display: none;
`;

export const FormInput = styled.input`
   font-size: 14px;
   width: 100%;
   padding: 0.75rem 1.2rem;
   border: none;
   border-radius: 2px;

   &::placeholder {
    color: gray;
    font-size: 12px;
   }
`;

export const FormButton = styled.button`
   font-size: 14px;
   color: #fff;
   padding: 0.75rem 1rem;
   border: none;
   border-radius: 2px;
   background-color: #09798C;
   cursor: pointer;
`;

export const SocialMediaLinks = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   padding: 0.5rem;
   margin-top: 1.5rem;
   cursor: pointer;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding: 1rem;
  width: 40%;
  gap: 70px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLinkName = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const FooterLink = styled(LinkRouter)`
  font-size: 12px;
  text-decoration: none;
  line-height: 2.5;
  color: #fff;
`;

export const FooterCopyright = styled.small`
  padding: 0.5rem;
  font-size: 10px;
  text-align: center;
  color: #fff;
`;