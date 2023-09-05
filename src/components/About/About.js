import React from 'react';
import {
  PageContainer,
  HeaderContainer,
  HeaderContent,
  HeaderContentText,
  HeaderTitle,
  Highlight,
  HeaderText,
  ButtonContainer,
  Button,
  AboutTitle,
  AboutText,
  SectionContainer,
  ValueContent,
  ValueContentText,
  ValueTitle,
  ValueText,
  Paragraph,
  InformationContainer,
  SectionTitle,
  TeamCard,
  Image,
  TeamCardHeader,
  TeamCardContent,
  IconWrapper
} from './AboutStyling';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


const AboutPage = () => {
  return (
    <>
    <PageContainer>
      <HeaderContainer>
      <HeaderContent>
        <HeaderContentText>
          <HeaderTitle>Building <Highlight>Stronger</Highlight> Minds, One <Highlight>Patient</Highlight> at a Time</HeaderTitle>
            <HeaderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </HeaderText>
        </HeaderContentText>
        <ButtonContainer><Button to='https://www.medium.com/' target='_blank'>Learn More</Button></ButtonContainer>
      </HeaderContent>
       </HeaderContainer>

       <AboutTitle>PAX Private Psychiatry & Therapy Clinic.</AboutTitle>
          <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          </AboutText>

      <SectionContainer>
        <ValueContent>
        <ValueContentText>
        <ValueTitle>We Are Committed to Your Health.</ValueTitle>
          <ValueText>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>

            <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </Paragraph>
          </ValueText>
        </ValueContentText>
        </ValueContent>
        </SectionContainer>

       <SectionTitle>Meet Our Medical Team</SectionTitle>
       <InformationContainer>
        <TeamCard>
        <Image src={require('../../images/Team01.jpg')} alt='person' />
         <TeamCardHeader>Dr. Aisha Nkosi</TeamCardHeader>
        <TeamCardContent>Clinical Psychologist | Clinical Director</TeamCardContent>
       <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       <TeamCard>
        <Image src={require('../../images/Team02.jpg')} alt='person' />
         <TeamCardHeader>Dr. Kwame Osei</TeamCardHeader>
        <TeamCardContent>Adolescent Therapist | Clinical Lead</TeamCardContent>
       <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       <TeamCard>
        <Image src={require('../../images/Team03.jpg')} alt='person' />
         <TeamCardHeader>Dr. Zara Abiola</TeamCardHeader>
      <TeamCardContent>Couples & Marriage Counsellor | Medical Director</TeamCardContent>
       <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       <TeamCard>
        <Image src={require('../../images/Team04.jpg')} alt='person' />
         <TeamCardHeader>Dr. Jabari Sibanda</TeamCardHeader>
        <TeamCardContent>Clinical Psychiatrist | Operational Lead</TeamCardContent>
       <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       <TeamCard>
        <Image src={require('../../images/Team05.jpg')} alt='person' />
         <TeamCardHeader>Dr. Tariq Adewale</TeamCardHeader>
        <TeamCardContent>Marriage & Family Counsellor</TeamCardContent>
       <IconWrapper>
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
       <TeamCard>
        <Image src={require('../../images/Team06.jpg')} alt='person' />
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
