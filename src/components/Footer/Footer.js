import React from "react";
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
  return (
    <MainContainer>
      <FooterSection>
        <NewsletterContainer>
          <NewsletterTitle>Subscribe to Our Weekly Newsletter</NewsletterTitle>
          <NewsletterDescription>Get Exclusive Health Content Curated by Industry Experts.</NewsletterDescription> 
          <SubscriptionContainer>
            <SubscriptionLabel>Email</SubscriptionLabel>
            <SubscriptionBox id='email' type='email' placeholder='asterawoke@gmail.com' autoComplete='' ></SubscriptionBox>
            <SubscriptionButton>Subscribe</SubscriptionButton>
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