import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsletterTitle = styled.h2`
  color: #fff;
  font-size: 19px;
  text-align: center;
  margin-bottom: 1rem;
`;

export const NewsletterBody = styled.h3`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 1.0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    flex-flow: wrap;
  }
`;

export const FormLabel = styled.label`
   display: none;
`;

export const FormInput = styled.input`
   color: #000;
   text-align: left;
   font-size: 14px;
   width: 100%;
   padding-left: 20px;
   padding-right: 30px;
   padding-bottom: 10px;
   padding-top: 9px;
   margin-right: 2rem;
   border: 1px solid #000;
   border-radius: 2px;
   outline: none;

   &::placeholder {
    color: #000;
    font-size: 0.9rem;
   }

   @media only screen and (max-width: 820px) {
    padding: 9px 25px;
    margin-bottom: 0.8;
    font-size: 1.2rem;
   }
`;

export const FormButton = styled.button`
   font-size: 1rem;
   color: #fff;
   outline: none;
   padding: 0.6rem 1.2rem;
   margin-left: 15px;
   border-radius: 3px;
   border: none;
   background-color: #09798C;
   cursor: pointer;
`;

export const FooterLinkContainer = styled.div`
   display: flex;

  @media screen and (max-width: 820px) {
    padding-top: 12px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinks = styled.div`
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
  width: 155px;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkName = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const FooterLink = styled(LinkRouter)`
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
`;

export const FooterCopyright = styled.small`
  color: #fff;
  font-size: 10px;
  text-align: center;
  margin-top: 13px;
  margin-bottom: 13px;
`;