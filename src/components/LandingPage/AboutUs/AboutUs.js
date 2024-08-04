import React from "react";
import {
  AboutUsSection,
  ContentContainer,
  ImageContainer,
  Image,
  CompanyMission,
  MissionHighlight,
  Mission,
  MissionDescription,
  ButtonContainer,
  MeetOurDoctors
} from './AboutUsStyling';
import AboutImg from '../../../images/NewAppointment.jpg';


const AboutUs = () => {
    return (
      <AboutUsSection>
        <ContentContainer> 
            <ImageContainer>
                <Image src={AboutImg} width={2846} height={1754} alt="Doctor-Patient in Conversation"></Image>
            </ImageContainer>
             
            <CompanyMission>
                <MissionHighlight>Our Mission</MissionHighlight> 
                <Mission>
                  Lorem ipsum dolor sit amet. 
                </Mission>

                <MissionDescription>
                  Donec neque mauris, pharetra ut metus quis, aliquet faucibus augue. Nunc vitae dolor vitae augue sodales dapibus 
                  eu eget augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Vestibulum non nulla a odio dictum gravida nec a nisl. Maecenas maximus arcu tempor elit vehicula, sed ornare arcu pellentesque.
                  Vestibulum non nulla a odio dictum gravida nec a nisl. Maecenas maximus arcu tempor elit vehicula, sed ornare arcu pellentesque. 
                </MissionDescription>

                <ButtonContainer>
                    <MeetOurDoctors to='/doctors'>Meet Our Doctors</MeetOurDoctors>
                </ButtonContainer>
            </CompanyMission>
        </ContentContainer> 
      </AboutUsSection>
    );
};

export default AboutUs;