import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  MainContainer,
  FooterSection,
  NewsletterContainer,
  NewsletterTitle,
  NewsletterDescription,
  SubscriptionContainer,
  SubscriptionLabel,
  SubscriptionBox,
  SubscriptionButton,
  SocialMediaContainer,
  FooterLinkContainer,
  FooterLinkHeader,
  FooterLinkList,
  FooterLink,
  FooterCopyright
} from "./FooterStyling";


const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubmit = async (e) => {
    try {
      const newsletterData = {
        email
      };
            
      const dofRef = await addDoc(collection(db, 'newsletter'), newsletterData);  
      
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
    }
  }

  return (
    <MainContainer>
      <FooterSection>
        <NewsletterContainer>
          {subscriptionStatus === true && <Alert style={{ display:"block", textAlign: "center", fontSize: "0.85rem", fontWeight: "700", color: "#fff", border: "1px solid green", padding: "0.5rem 1rem", borderRadius: "4px"}} variant="success">Subscribed!</Alert>}
          {subscriptionStatus === false && <Alert style={{ display:"block", textAlign: "center", fontSize: "0.85rem", fontWeight: "700", color: "#fff", border: "1px solid red", padding: "0.5rem 1rem", borderRadius: "4px"}} variant="danger">Subscription Failed. Please try again.</Alert>}
          <NewsletterTitle>Subscribe to Our Weekly Newsletter</NewsletterTitle>
          <NewsletterDescription>Get Exclusive Health Content Curated by Industry Experts.</NewsletterDescription> 
          <SubscriptionContainer>
            <SubscriptionLabel>Email</SubscriptionLabel>
            <SubscriptionBox id='email' type='email' autoComplete='' ></SubscriptionBox>
            <SubscriptionButton onClick={handleSubmit}>Subscribe</SubscriptionButton>
          </SubscriptionContainer>     
          <SocialMediaContainer>
            <FaFacebook to='https://www.facebook.com' target='_blank' size={30} color='#fff'></FaFacebook>
            <FaTwitter to='https://www.twitter.com' target='_blank' size={30} color='#fff'></FaTwitter>
            <FaLinkedin to='https://www.linkedin.com' target='_blank' size={30} color='#fff'></FaLinkedin>
            <FaInstagram to='https://www.instagram.com' target='_blank' size={30} color='#fff'></FaInstagram>
          </SocialMediaContainer>
        </NewsletterContainer>   
        <FooterLinkContainer>
          <FooterLinkList>
            <FooterLinkHeader>HOSPITAL</FooterLinkHeader>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Our Medical Team</FooterLink>
            <FooterLink>Our Facilities</FooterLink>
            <FooterLink>Testimonials</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>FAQs</FooterLink>
          </FooterLinkList>
          <FooterLinkList> 
            <FooterLinkHeader>SERVICES</FooterLinkHeader>
            <FooterLink>Adolescent Therapy</FooterLink>
            <FooterLink>Family Therapy</FooterLink>
            <FooterLink>Couples Therapy</FooterLink>
            <FooterLink>Marriage Counselling</FooterLink>
            <FooterLink>Corporate Counselling</FooterLink>
            <FooterLink>Psychiatry</FooterLink>
          </FooterLinkList>        
          <FooterLinkList>
            <FooterLinkHeader>RESOURCES</FooterLinkHeader>
            <FooterLink>Research Journal</FooterLink>
            <FooterLink>Innovative Endeavors</FooterLink>
            <FooterLink>In the News</FooterLink>
            <FooterLink>Price Transparency</FooterLink>
            <FooterLink>Patient & Visitor Policy</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
          </FooterLinkList>
        </FooterLinkContainer>
      </FooterSection>      
      <FooterCopyright>Copyright &copy; {new Date().getFullYear()} Pax Therapy Clinic. All rights reserved.</FooterCopyright>
    </MainContainer>
  )
};

export default Footer; 