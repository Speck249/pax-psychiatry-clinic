/* import React from "react";
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
          <ServiceHighlight>What We Offer</ServiceHighlight>
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
                <Services>Corporate</Services>
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

export default Service; */

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
    CardWrapper,
    CardFront,
    CardBack,
} from "./ServiceStyling";
import ServiceImg from "../../../images/Services.jpg";
import Appointment from "./Appointment";

const Service = () => {
  const services = [
    { name: "Therapy", description: "Receive personalized support to help you develop coping strategies to improve your mental health and foster personal growth." },
    { name: "Counselling", description: "Our counseling services promote self-discovery, and assist in finding effective solutions to life's challenges."},
    { name: "Psychiatry", description: "Get access to comprehensive evaluations and tailored medication management that address your specific needs." },
    { name: "Corporate", description: "We offer specialized wellness programs designed to enhance employee mental health and workplace productivity." },
  ];

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
          <ServiceHighlight>What We Offer</ServiceHighlight>
          <OurServices> 
            {services.map((service, index) => (
              <ContentContainer key={index}>
                <CardWrapper>
                  <CardFront>
                    <ServiceType>
                      <Services>{service.name}</Services>
                    </ServiceType>
                  </CardFront>
                  <CardBack>
                    <AdditionalDescription>
                      {service.description}
                    </AdditionalDescription>
                  </CardBack>
                </CardWrapper>
              </ContentContainer>
            ))}
          </OurServices>           
          <ButtonContainer>
            <Appointment />
          </ButtonContainer>
        </ServiceContainer>
        <ImageContainer>
          <Image src={ServiceImg} width={2846} height={1754} alt="Doctor-Patient in Conversation" />
        </ImageContainer>
      </ServiceSection>
    </MainContainer>
  );
}

export default Service;