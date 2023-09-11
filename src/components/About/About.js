import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  PageContainer,
  HeaderContainer,
  HeaderContent,
  HeaderContentText,
  HeaderTitle,
  Highlight,
  HeaderText,
  AboutTitle,
  SectionContainer,
  ValueContentText,
  ValueText,
  Paragraph,
  SectionTitle,
  InformationContainer,
  TeamCard,
  Image,
  TeamCardHeader,
  TeamCardContent,
  IconWrapper
} from './AboutStyling';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <>
     <PageContainer>
       <HeaderContainer>
         <HeaderContent>
         <HeaderContentText>
           <HeaderTitle>Building <Highlight>Stronger</Highlight> Minds, One <Highlight>Patient</Highlight> at a Time</HeaderTitle>
            <HeaderText>Our team of experienced therapists is here to guide you through your mental health and emotional well-being journey.
             We believe that with the right support and guidance, everyone has the potential to overcome obstacles and achieve personal growth. 
            </HeaderText>
         </HeaderContentText>
         </HeaderContent>
       </HeaderContainer>

       <AboutTitle>About Portfolio Project - PAX Private Psychiatry & Therapy Clinic.</AboutTitle>

       <SectionContainer>
         <ValueContentText>
         <ValueText>
          <Paragraph>This Portfolio Project for <Link to='https://www.holbertonschool.com/' target='_blank'>Holberton</Link> School's <Link to='https://www.alxafrica.com/' target='_blank'>Software Engineering</Link> Program
          [offered by ALX Africa], aka my very first humble excursion into the exciting yet daunting world of Front End Engineering, was born out of a meaningful conversation with a close friend, during which we explored various
          topics related to the dire shortage of Therapy clinics in Ethiopia. The discussion highlighted the prevailing taboo surrounding mental health in the country, and the absence of compelling online presence of mental
          health clinics, and how those that have websites often underutilize them.</Paragraph>
         
          <Paragraph>With these insights in mind, a conceptual website for a therapy clinic (PAX) was born. This website not only aims to serve as a comprehensive resource for the company but also seeks to ease
          doctor-patient relationship by integrating technology into the therapeutic process. The goal is to bridge the gap between patients and therapists, making mental health services more accessible and engaging.
          By embracing technology, PAX aspires to empower individuals on their mental health journey, providing them with tools to actively participate in their own healing process. </Paragraph>
        
          <Paragraph>Beyond its functionality, the website emphasizes creating a welcoming and approachable space where individuals feel comfortable seeking support. Through engaging visuals and 
          informative content, it aims to reduce the stigma associated with therapy and inspire individuals to prioritize their mental well-being. While this project is conceptual, it seeks
          to address the pressing need for therapy clinics and destigmatizing mental health in Ethiopia. Please note that this website serves as a demonstration of what is possible, highlighting
          the invaluable importance of inclusive innovative solutions within the therapy field.</Paragraph>
          
          <Paragraph>
           <Link to='www.linkedin.com/in/redietkifle' target='_blank'><FaLinkedin  size='20px' color='#000'/> LinkedIn Profile</Link>
          </Paragraph>

          <Paragraph>
           <Link to='https://github.com/Speck249/pax-psychiatry-clinic' target='_blank'><FaGithub size='20px' color='#000' /> Project Repository</Link>
          </Paragraph>

         </ValueText>
         </ValueContentText>
      </SectionContainer>

      <SectionTitle>Meet Our Medical Team</SectionTitle>
       <InformationContainer>
       <TeamCard><Image src={require('../../images/Team01.jpg')} alt='person' />
          <TeamCardHeader>Dr. Aisha Nkosi</TeamCardHeader>
          <TeamCardContent>Clinical Psychologist | Clinical Director</TeamCardContent>
          <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
          </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Team02.jpg')} alt='person' />
         <TeamCardHeader>Dr. Kwame Osei</TeamCardHeader>
         <TeamCardContent>Adolescent Therapist | Clinical Lead</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#000' />
          <FaFacebook  size='20px' color='#000' />
          <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Team03.jpg')} alt='person' />
         <TeamCardHeader>Dr. Zara Abiola</TeamCardHeader>
         <TeamCardContent>Couples & Marriage Counsellor | Medical Director</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#000' />
          <FaFacebook  size='20px' color='#000' />
          <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Team04.jpg')} alt='person' />
         <TeamCardHeader>Dr. Jabari Sibanda</TeamCardHeader>
         <TeamCardContent>Clinical Psychiatrist | Operational Lead</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#000' />
          <FaFacebook  size='20px' color='#000' />
          <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Team05.jpg')} alt='person' />
         <TeamCardHeader>Dr. Tariq Adewale</TeamCardHeader>
         <TeamCardContent>Marriage & Family Counsellor</TeamCardContent>
         <IconWrapper>
          <FaLinkedin  size='20px' color='#000' />
          <FaFacebook  size='20px' color='#000' />
          <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       
       <TeamCard><Image src={require('../../images/Team06.jpg')} alt='person' />
         <TeamCardHeader>Dr. Nia Jelani</TeamCardHeader>
         <TeamCardContent>Family Therapist | Consultant Psychologist</TeamCardContent>
         <IconWrapper>
          <FaLinkedin size={25} color='#000' />
          <FaFacebook  size={25} color='#000' />
          <FaTwitter size={25} color='#000' />
         </IconWrapper>
       </TeamCard>
       </InformationContainer>
      </PageContainer>
    </>
  );
};

export default AboutPage;
