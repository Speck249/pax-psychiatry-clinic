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
  InformationContainer,
  SectionTitle,
  TeamCard,
  Image,
  TeamCardHeader,
  TeamCardContent,
  IconWrapper
} from './TeamStyling';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


const TeamPage = () => {
  return (
    <>
    <PageContainer>
      <HeaderContainer>
      <HeaderContent>
        <HeaderContentText>
          <HeaderTitle>Building <Highlight>Stronger</Highlight> Minds, One <Highlight>Patient</Highlight> at a Time</HeaderTitle>
            <HeaderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem
              quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          </HeaderText>
        </HeaderContentText>
        <ButtonContainer><Button to='https://www.medium.com/' target='_blank'>Learn More</Button></ButtonContainer>
      </HeaderContent>
       </HeaderContainer>

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
           <FaLinkedin  size='20px' color='#000' />
           <FaFacebook  size='20px' color='#000' />
           <FaTwitter size='20px' color='#000' />
         </IconWrapper>
       </TeamCard>
      
       </InformationContainer>
       </PageContainer>

    </>
  );
};

export default TeamPage;
