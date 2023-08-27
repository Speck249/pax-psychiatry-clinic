import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #000;
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 46px 22px;
  margin: 0 auto;
`;

export const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  font-weight: 300;
  text-align: center;
  line-height: 1.0;
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 820px) {
    flex-direction: column;
    flex-flow: wrap;
  }
`;

export const Label = styled.label`
   display: none;
`;

export const NewsletterInput = styled.input`
   background-color: #fff;
   color: #000;
   font-size: 1.2rem;
   text-align: left;
   padding: 9px 25px;
   border: 1px solid #000;
   border-radius: 2px;
   margin-right: 15px;
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

export const Button = styled.button`
   background-color: #09798C;
   color: #fff;
   outline: none;
   padding: 0.7rem 1.3rem;
   border-radius: 3px;
   border: none;
   font-size: 1rem;
   cursor: pointer;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

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
  margin: 20px;
  width: 125px;
  box-sizing: border-box;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkName = styled.h1`
  font-size: 14px;
  margin-bottom: 12px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  font-size: 13px;
  text-decoration: none;
  margin-bottom: 0.7rem;
`;

export const FooterCopyright = styled.small`
  color: #fff;
  font-size: 10px;
  text-align: center;
  margin-top: 18px;
  /*margin-bottom: 12px;*/
`;