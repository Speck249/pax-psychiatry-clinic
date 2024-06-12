import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    Newsletter,
    NewsletterTitle,
    NewsletterBody,
    Form, 
    FormLabel,
    FormInput,
    FormButton,
    SocialMediaLinks,
    FooterLinkWrapper,
    FooterLinks,
    FooterLinkName,
    FooterLink,
    FooterCopyright
} from './FooterStyling';


const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState('');
    const handleSubmit = async (e) => {
      try {
        const newsletterData = {
            email
        };
        const docRef = await addDoc(collection(db, 'newsletters'), newsletterData);
        setEmail('');    
        setSubscriptionStatus(true);
        setTimeout(() => {
          setSubscriptionStatus(null);
        }, 5000);
      } catch (error) {
        setSubscriptionStatus(false);    
        setTimeout(() => {
          setSubscriptionStatus(null);
        }, 5000);
      };
    };

    return (
      <FooterContainer>
        <FooterWrap>
          <Newsletter>
            <NewsletterTitle>
              Subscribe to Our Weekly Newsletter.
            </NewsletterTitle>
            <NewsletterBody>
              Get Exclusive Health Content Curated by Industry Experts.
            </NewsletterBody>
            {subscriptionStatus === true && <Alert variant="success">Welcome to the PAX Community!</Alert>}
            {subscriptionStatus === false && <Alert variant="danger">Subscription Failed. Please try again.</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormLabel>Email Address</FormLabel>
              <FormInput
                type='email'
                id='email'
                value={email}
                placeholder='Insert Email' 
                onChange={(e) => setEmail(e.target.value)} required
              />
              <FormButton variant='primary' type='submit'>Subscribe</FormButton>
            </Form>

            <SocialMediaLinks>
              <FaFacebook to='https://www.facebook.com/' target= '_blank' size={30} color='#fff' />
              <FaLinkedin to='https://www.linkedin.com/' target='_blank' size={30} color='#fff' />
              <FaTwitter to='https://www.twitter.com/' target='_blank' size={30} color='#fff' />
              <FaInstagram to='https://www.instagram.com/' target='_blank' size={30} color='#fff' />
              </SocialMediaLinks>
          </Newsletter>

          <FooterLinkWrapper>
            <FooterLinks>
              <FooterLinkName>HOSPITAL</FooterLinkName>
              <FooterLink to='/about'>About Us</FooterLink>
              <FooterLink to='/doctors'>Our Medical Team</FooterLink>
              <FooterLink to='#'>Our Facilities</FooterLink>
              <FooterLink to='#'>Patient's Testimonials</FooterLink>
              <FooterLink to='#'>Careers</FooterLink>
              <FooterLink to='#'>FAQs</FooterLink>
            </FooterLinks>
                    
            <FooterLinks>
              <FooterLinkName>SERVICES</FooterLinkName>
              <FooterLink to='/services'>Adolescent Therapy</FooterLink>
              <FooterLink to='/services'>Family Therapy</FooterLink>
              <FooterLink to='/services'>Couples Therapy</FooterLink>
              <FooterLink to='/services'>Marriage Counselling</FooterLink>
              <FooterLink to='/services'>Psychiatry</FooterLink>
              <FooterLink to='/services'>Corporate Counselling</FooterLink>
            </FooterLinks>

            <FooterLinks>
              <FooterLinkName>RESOURCES</FooterLinkName>
              <FooterLink to='https://www.medium.com/' target='_blank'>Blog</FooterLink>
              <FooterLink to='#'>Medical Journal</FooterLink>
              <FooterLink to='#'>Price Transparency</FooterLink>
              <FooterLink to='#'>Patient & Visitor Policy</FooterLink>
              <FooterLink to='#'>Terms & Conditions</FooterLink>
            </FooterLinks>
          </FooterLinkWrapper>
        </FooterWrap>

        <FooterCopyright to='https://github.com/Speck249/'>
          PAX &copy; {new Date().getFullYear()} All Rights Reserved
        </FooterCopyright>
      </FooterContainer>
    )
};

export default Footer;