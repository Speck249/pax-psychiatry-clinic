import React from "react";
import {
  MainContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  AboutUsSection,
  ImageContainer,
  Image,
  CompanyMission,
  MissionHighlight,
  Mission,
  MissionDescription,
  ButtonContainer,
  MeetOurDoctors
} from "./AboutUsStyling";
import AboutImg from '../../../images/AboutUs.jpg';


const AboutUs = () => {
    return (
      <MainContainer>
        <SectionHeader id="about-section">
          <SectionTitle>Empowering Minds, Empowering Lives.</SectionTitle>
{          <SectionDescription>
            PAX Psychiatric & Therapy Clinic is committed to providing accessible and affordable quality healthcare. We offer a holistic service 
            that combines evidence-based therapies with cutting-edge techniques that target a wide range of challenges. 
          </SectionDescription>}
        </SectionHeader>

        <AboutUsSection>
          <ImageContainer>
            <Image src={AboutImg} width={2846} height={1754} alt="Doctor-Patient in Conversation"></Image>
          </ImageContainer>
             
          <CompanyMission>
            <MissionHighlight>WHO WE ARE</MissionHighlight> 
            <Mission>Your Path to Wellness.</Mission>
            <MissionDescription>
              We are a team of medical professionals with diverse expertise, offering compassionate psychiatric care and therapy in a safe, nurturing environment. 
              Since our founding in 1978, our institution has built a strong legacy of innovation and patient-centered care that will empower you to live the life
              you love. With tailored medical services that place our patients at the heart of everything we aim to accomplish, we are honored to become a steadfast 
              partner in your journey to wellness.
            </MissionDescription>
            <ButtonContainer>
              <MeetOurDoctors to="/doctors">Meet Our Doctors</MeetOurDoctors>
            </ButtonContainer>
          </CompanyMission>
        </AboutUsSection> 
      </MainContainer>
    );
};

export default AboutUs;