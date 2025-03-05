import React from "react";
import {
  MedicalTeamSection,
  MedicalTeamHeader,
  SectionTitle,
  SectionDescription,
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
        <MedicalTeamHeader>
          <SectionTitle>Building Stronger Minds, One Patient at a Time</SectionTitle>
          <SectionDescription>
            We are proud to have assembled a team of exceptional professionals with a wealth of expertise. Our psychiatrists have trained at some of top-ranking medical institutions 
            across the world and are recognized leaders in their respective fields. With a deep understanding of the complexities of the human mind, our clinicians employ the latest 
            evidence-based treatments to help our patients navigate their mental health journeys with compassion and care. 
            <Image src={greyLeaf} width={500} height={500} alt="Decorative Leaf Image"></Image> 
          </SectionDescription>
        </MedicalTeamHeader>
      <MedicalTeamContainer>
        <FirstDoctor>
          <ContentContainer>
            <DoctorName>Dr. Aisha Nkosi, M.D.</DoctorName>
            <MedicalTitle>Chief Psychiatrist</MedicalTitle>
          </ContentContainer>
          <AdditionalDescription>
            <strong>Dr. Aisha Nkosi, M.D.</strong> <br />
            <strong>Chief Psychiatrist</strong> <br /> <br />
              As the Chief Psychiatrist at PAX, Dr. Aisha Nkosi brings over 15 years of experience in treating a wide range of mental health conditions. Board-certified 
              in psychiatry, she has a proven track record of developing effective, personalized and evidence-based treatment plans. Dr. Nkosi's expertise in managing 
              complex cases and commitment to ensuring Health Equity continues to garner widespread respect from the medical community.
          </AdditionalDescription>
        </FirstDoctor>
        <SecondDoctor>
          <ContentContainer>
            <DoctorName>Dr. Kwame Osei, Ph.D.</DoctorName>
            <MedicalTitle>Director of Psychotherapy Services</MedicalTitle>
          </ContentContainer>
          <AdditionalDescription>
            <strong>Dr. Kwame Osei, Ph.D.</strong> <br />
            <strong>Director of Psychotherapy Services</strong> <br /> <br />
              Dr. Kwame Osei is the clinical psychologist and Director of Psychotherapy Services at PAX. His extensive training in various therapeutic 
              modalities, including cognitive-behavioral therapy and psychoanalysis, allows him to develop personalized treatment plans that address 
              the root causes of mental health issues. Dr. Osei is committed to empowering clients to cultivate inner strength and self-awareness for 
              long-term emotional well-being.
          </AdditionalDescription>
        </SecondDoctor>
        <ThirdDoctor>
          <ContentContainer>
            <DoctorName>Dr. Nia Jelani, LCSW </DoctorName>
            <MedicalTitle>Lead Clinical Therapist</MedicalTitle>
          </ContentContainer>
          <AdditionalDescription>
            <strong>Dr. Nia Jelani, LCSW</strong> <br />
            <strong>Lead Clinical Therapist</strong> <br /> <br />
            Dr. Nia Jelani is a Licensed Clinical Social Worker with a passion for helping individuals and families navigate life's challenges. As the 
            Lead Clinical Therapist, she utilizes her expertise in holistic, strength-based approaches to support clients in achieving their mental 
            health goals. Dr. Jelani's empathetic, client-centered style has earned her a reputation for creating a safe, supportive environment where 
            personal growth can flourish.
          </AdditionalDescription>
        </ThirdDoctor>       
        <FourthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Zara Abiola, Psy.D.</DoctorName>
            <MedicalTitle>Head of Counselling Services</MedicalTitle>
          </ContentContainer>
          <AdditionalDescription>
            <strong>Dr. Zara Abiola, Psy.D.</strong> <br />
            <strong>Head of Counselling Services</strong> <br /> <br />
            With a Doctorate in Clinical Psychology, Dr. Zara Abiola is the Head of Counselling Services at PAX. Her deep understanding of human behavior 
            and extensive experience in providing guidance and support have made her a trusted resource for individuals facing personal, professional, or 
            relationship-related difficulties. Dr. Abiola's collaborative approach empowers clients to develop practical strategies for improving their overall well-being.
          </AdditionalDescription> 
        </FourthDoctor>
        <FifthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Tariq Adewale, M.D.</DoctorName>
            <MedicalTitle>Senior Consulting Psychiatrist</MedicalTitle>
          </ContentContainer>
          <AdditionalDescription>
            <strong>Dr. Tariq Adewale, M.D.</strong> <br />
            <strong>Senior Consulting Psychiatrist</strong> <br /> <br />
            Dr. Tariq Adewale is a highly respected Senior Consulting Psychiatrist with a reputation for delivering exceptional patient care. His expertise in 
            the assessment, diagnosis, and treatment of complex mental health conditions, including co-occurring disorders, has made him a valuable asset to the 
            clinic's multidisciplinary team. Dr. Adewale's is committed to a holistic approach to ensure his clients receive the most effective and compassionate care.
          </AdditionalDescription>
        </FifthDoctor>
        <SixthDoctor>
          <ContentContainer>
            <DoctorName>Dr. Jabari Sibanda, Ph.D.</DoctorName>
            <MedicalTitle>Clinical Psychologist & Therapy Supervisor</MedicalTitle>
          </ContentContainer>         
          <AdditionalDescription>
             <strong>Dr. Jabari Sibanda, Ph.D.</strong> <br />
             <strong>Clinical Psychologist & Therapy Supervisor</strong> <br /> <br />
             As a Clinical Psychologist and Therapy Supervisor, Dr. Jabari Sibanda is dedicated to guiding both clients and therapists towards meaningful 
             growth and transformation. With extensive training in evidence-based psychotherapies, he specializes in helping individuals overcome trauma, 
             depression, and anxiety. Dr. Sibanda's collaborative, strength-based development approach make him an invaluable member of PAX's clinical team.
          </AdditionalDescription>
        </SixthDoctor>
      </MedicalTeamContainer>
    </MedicalTeamSection>
  )
};

export default Doctors;