import React from 'react';
import {
  MedicalTeamSection,
  SectionBrief,
  SectionTitle,
  SectionDescription,
  ImageContainer,
  Image,
  MedicalTeamContainer,
  ContentContainer,
  FirstDoctor,
  SecondDoctor,
  ThirdDoctor,
  FourthDoctor,
  FifthDoctor,
  SixthDoctor,
  DoctorName,
  MedicalTitle,
  AdditionalDescription
} from "./DoctorsStyling";
import greyLeaf from "../../images/Grey-Leaf.png";


const Doctors = () => {
  return (
    <MedicalTeamSection>
      <SectionBrief>
        <SectionTitle>Building Stronger Minds, One Patient at a Time</SectionTitle>
        <SectionDescription>
          We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
          Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
          With a deep understanding of the complexities of the human mind, our clinicians employ the latest evidence-based treatments to help our patients navigate their mental
          health journeys with compassion and care.  
        </SectionDescription>
        <ImageContainer>
          <Image src={greyLeaf} width={500} height={500} alt="Decorative Leaf Image"></Image>
        </ImageContainer>
      </SectionBrief>

      <MedicalTeamContainer>
        <FirstDoctor>
          <ContentContainer>
            <DoctorName>Dr. Aisha Nkosi</DoctorName>
            <MedicalTitle>Clinical Psychologist | Clinical Director</MedicalTitle>
          </ContentContainer>

          <AdditionalDescription>
            <strong>Dr. Aisha Nkosi</strong> <br />
            <strong>Clinical Psychologist | Clinical Director</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </AdditionalDescription>
        </FirstDoctor>

        <SecondDoctor>
          <ContentContainer>
            <DoctorName>Dr. Kwame Osei</DoctorName>
            <MedicalTitle>Adolescent Therapist | Clinical Lead</MedicalTitle>
          </ContentContainer>

          <AdditionalDescription>
            <strong>Dr. Kwame Osei</strong> <br />
            <strong>Adolescent Therapist | Clinical Lead</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </AdditionalDescription>
        </SecondDoctor>

        <ThirdDoctor>
          <ContentContainer>
            <DoctorName>Dr. Nia Jelani</DoctorName>
            <MedicalTitle>Couples & Marriage Counsellor</MedicalTitle>
          </ContentContainer>

          <AdditionalDescription>
            <strong>Dr. Nia Jelani</strong> <br />
            <strong>Couples & Marriage Counsellor</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world.
          </AdditionalDescription>
        </ThirdDoctor>
        
        <FourthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Zara Abiola</DoctorName>
            <MedicalTitle>Couples & Marriage Counsellor</MedicalTitle>
          </ContentContainer>

          <AdditionalDescription>
            <strong>Dr. Zara Abiola</strong> <br />
            <strong>Couples & Marriage Counsellor</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </AdditionalDescription> 
        </FourthDoctor>

        <FifthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Tariq Adewale</DoctorName>
            <MedicalTitle>Clinical Psychiatrist</MedicalTitle>
          </ContentContainer>

          <AdditionalDescription>
            <strong>Dr. Tariq Adewale</strong> <br />
            <strong>Clinical Psychiatrist</strong> <br /> <br />
              We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
              Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </AdditionalDescription>
        </FifthDoctor>

        <SixthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Jabari Sibanda</DoctorName>
            <MedicalTitle>Marriage & Family Counsellor</MedicalTitle>
          </ContentContainer>
          
          <AdditionalDescription>
             <strong>Dr. Jabari Sibanda</strong> <br />
             <strong>Marriage & Family Counsellor</strong> <br /> <br />
               We are proud to have assembled a team of exceptional mental health professionals who bring a wealth of expertise and experience to our clinic. 
               Our psychiatrists have trained at some of the most prestigious medical institutions across the world and are recognized leaders in their respective fields.
               Our psychiatrists have trained at some of the most prestigious medical institutions across the world. 
          </AdditionalDescription>
        </SixthDoctor>
      </MedicalTeamContainer>
    </MedicalTeamSection>
  )
};

export default Doctors;