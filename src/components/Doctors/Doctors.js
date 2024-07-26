import React from 'react';
import {
  TeamSection,
  TeamIntroduction,
  SectionTitle,
  SectionDescription,
  ParagraphImg,
  TeamContainer,
  MedicalTeamOne,
  MoreDescription,
  MedicalTeamTwo,
  MedicalTeamThree,
  MedicalTeamFour,
  MedicalTeamFive,
  MedicalTeamSix,
  ContentContainer,
  DoctorName,
  DoctorDescription,
} from './DoctorsStyling';
import wreath from '../../images/ParagraphImg.png';


const Doctors = () => {
  return (
    <TeamSection>
      <TeamIntroduction>
        <SectionTitle>Building Stronger Minds, One Patient at a Time</SectionTitle>
        <SectionDescription>
          We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
          Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
          With a deep understanding of the complexities of the human mind, our clinicians employ the latest evidence-based treatments to help our patients navigate their mental
          health journeys with compassion and care.  
        </SectionDescription>
        <ParagraphImg src={wreath} width={500} height={500}></ParagraphImg>
      </TeamIntroduction>

      <TeamContainer>
        <MedicalTeamOne>
          <ContentContainer>
            <DoctorName>Dr. Aisha Nkosi</DoctorName>
            <DoctorDescription>Clinical Psychologist</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </MoreDescription>
        </MedicalTeamOne>

        <MedicalTeamTwo>
          <ContentContainer>
            <DoctorName>Dr. Kwame Osei</DoctorName>
            <DoctorDescription>Adolescent Therapist</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </MoreDescription>
        </MedicalTeamTwo>

        <MedicalTeamThree>
          <ContentContainer>
            <DoctorName>Dr. Nia Jelani</DoctorName>
            <DoctorDescription>Family Therapist</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </MoreDescription>
        </MedicalTeamThree>
        
        <MedicalTeamFour>
          <ContentContainer>
            <DoctorName>Dr. Zara Abiola</DoctorName>
            <DoctorDescription>Couples & Marriage Counsellor</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </MoreDescription> 
        </MedicalTeamFour>

        <MedicalTeamFive>
          <ContentContainer>
            <DoctorName>Dr. Tariq Adewale</DoctorName>
            <DoctorDescription>Clinical Psychiatrist</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </MoreDescription>
        </MedicalTeamFive>

        <MedicalTeamSix>
          <ContentContainer>
            <DoctorName>Dr. Jabari Sibanda</DoctorName>
            <DoctorDescription>Marriage & Family Counsellor</DoctorDescription>
          </ContentContainer>
          <MoreDescription>
             <strong>Dr. Kwame Osei</strong> <br />
             <strong>Adolescent Therapist</strong> <br /> <br />
               We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
               Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
               Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </MoreDescription>
        </MedicalTeamSix>
      </TeamContainer>
    </TeamSection>
  )
};

export default Doctors;