import React from "react";
import {
    MainContainer,
    SectionHeader,
    SectionTitle,
    SectionDescription,
    ServiceSection,
    ServiceContainer,
    OurServices,
    ServiceHighlight,
    ContentContainer,
    ServiceType,
    Services,
    AdditionalDescription,
    ButtonContainer,
    ImageContainer,
    Image,
    
} from "./ServiceStyling";
import ServiceImg from "../../../images/Services.jpg";
import Appointment from "./Appointment";


const Service = () => {
  return (
    <MainContainer id="service-section">
      <SectionHeader>
        <SectionTitle>Discover Our Services</SectionTitle>
        <SectionDescription>
            Our expert team offers a range of services, including individual therapy, group counseling, psychiatric evaluations, and medication management. 
            Whether you're seeking support for anxiety, depression, trauma, or any other mental health concern, we're here to help you find balance and healing.
        </SectionDescription>
      </SectionHeader>
      <ServiceSection>
        <ServiceContainer>
          <ServiceHighlight>WHAT WE OFFER</ServiceHighlight>
          <OurServices> 
            <ContentContainer>
              <ServiceType>
                <Services>Therapy</Services>
              </ServiceType>
              <AdditionalDescription>
                  Navigating the challenges of adolescence can be overwhelming. Our therapists offer a safe and supportive environment
                  where teenagers can explore their emotions, and thrive in their personal growth.
              </AdditionalDescription>
            </ContentContainer> 
            <ContentContainer>
              <ServiceType>
                <Services>Counselling</Services>
              </ServiceType> 
              <AdditionalDescription>
                Navigating the challenges of adolescence can be overwhelming. Our therapists offer a safe and supportive environment
                where teenagers can explore their emotions, and thrive in their personal growth.
              </AdditionalDescription>
            </ContentContainer>
            <ContentContainer>
              <ServiceType>
                <Services>Psychiatry</Services>
              </ServiceType>             
              <AdditionalDescription>
                Navigating the challenges of adolescence can be overwhelming. Our therapists offer a safe and supportive environment
                where teenagers can explore their emotions, and thrive in their personal growth.
              </AdditionalDescription>
            </ContentContainer>
            <ContentContainer>
              <ServiceType>
                <Services>Corporate Package</Services>
              </ServiceType>              
              <AdditionalDescription>
                Navigating the challenges of adolescence can be overwhelming. Our therapists offer a safe and supportive environment
                where teenagers can explore their emotions, and thrive in their personal growth.
              </AdditionalDescription>
            </ContentContainer>
          </OurServices>           
          <ButtonContainer>
            <Appointment />
          </ButtonContainer>
        </ServiceContainer>
        <ImageContainer>
          <Image src={ServiceImg} width={2846} height={1754} alt="Doctor-Patient in Conversation"></Image>
        </ImageContainer>
      </ServiceSection>
    </MainContainer>
  );
}

export default Service;