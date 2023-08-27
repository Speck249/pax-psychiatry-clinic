import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    Newsletter,
    NewsletterTitle,
    NewsletterBody,
    NewsletterForm,
    NewsletterInput,
    Label,
    Button,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinks,
    FooterLinkName,
    FooterLink,
    FooterCopyright
} from './FooterStyling';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram  } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
            <FooterContainer>
            <FooterWrap>
             <Newsletter>
                <NewsletterTitle>Subscribe to Our Weekly Newsletter.</NewsletterTitle>
                    <NewsletterBody>Get Exclusive Health Content Curated by Industry Experts.</NewsletterBody>
                        <NewsletterForm>
                            <Label htmlFor='email'>Email Address</Label>
                            <NewsletterInput name='email' id='email' type='email' placeholder='Insert Email' required/>
                            <Button>Subscribe</Button>
                        </NewsletterForm>
             </Newsletter>
             <FooterLinkContainer>
                <FooterLinkWrapper>
                <FooterLinks>
                <FooterLinkName>ABOUT</FooterLinkName>
                    <FooterLink to='/about'>Facility</FooterLink>
                    <FooterLink to='/about'>Clinical Team</FooterLink>
                    <FooterLink to='/about'>Careers</FooterLink>
                    <FooterLink to='/about'>Terms of Service</FooterLink>
                </FooterLinks>
                
                <FooterLinks>
                    <FooterLinkName>SERVICES</FooterLinkName>
                     <FooterLink to='/services'>Adolescent Therapy</FooterLink>
                    <FooterLink to='/services'>Adult Therapy</FooterLink>
                    <FooterLink to='/services'>Family Therapy</FooterLink>
                    <FooterLink to='/services'>Couples Therapy</FooterLink>
                    <FooterLink to='/services'>Marriage Counselling</FooterLink>
                    <FooterLink to='/services'>Psychiatry</FooterLink>
                </FooterLinks>
                </FooterLinkWrapper>

                <FooterLinkWrapper>
                <FooterLinks>
                    <FooterLinkName>CONTACT</FooterLinkName>
                    <FooterLink to='https://www.facebook.com/' target='_blank'><FaFacebook /> Facebook</FooterLink>
                    <FooterLink to='https://www.linkedin.com/' target='_blank'><FaLinkedin /> LinkedIn</FooterLink>
                    <FooterLink to='https://www.twitter.com/' target='_blank'><FaTwitter /> Twitter</FooterLink>
                    <FooterLink to='https://www.instagram.com/' target='_blank'><FaInstagram /> Instagram</FooterLink>
                </FooterLinks>

                <FooterLinks>
                    <FooterLinkName>RESOURCES</FooterLinkName>
                    <FooterLink to='/'>FAQs</FooterLink>
                    <FooterLink to='https://www.medium.com/' target='_blank'>Blog</FooterLink>
                </FooterLinks>
                </FooterLinkWrapper>
             </FooterLinkContainer>
             <FooterCopyright to='https://github.com/Speck249/'> PAX &copy; {new Date().getFullYear()} All Rights Reserved </FooterCopyright>
               </FooterWrap>
            </FooterContainer>
    </>
  );
};

export default Footer