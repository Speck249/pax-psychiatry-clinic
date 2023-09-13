import React from 'react';
import { FaHandHoldingHeart, FaMoneyBill } from 'react-icons/fa';
import { renderStars } from '../../utility/renderStars';
import {
    PageContainer,
    HeaderContainer,
    HeaderTitle,
    HeaderText,
    IconContainer,
    IconWrapper,
    HeaderSubtext,
    ButtonContainer,
    Button,
    ServiceTitle,
    ServiceText,
    InformationContainer,
    ServiceCard,
    ServiceCardHeader,
    ServiceCardContent
} from './ServicesStyling';

/* Creates page layout that emphasizes full-scale clinic services. */
/* Creates header button that routes to Booking page. */
const ServicesPage = () => {
    const averageRating = 4.5;

    return (
    <>
     <PageContainer>
      <HeaderContainer>
       <HeaderText>Customer Rating: {renderStars(averageRating)} </HeaderText>
        <HeaderTitle>Exceptional Healthcare.</HeaderTitle>
          <HeaderText>With a patient-centered approach, we prioritize active collaboration and open communication. We believe in building a strong
           doctor-patient relationship based on trust, empathy, and respect. Together, we will work towards your recovery and personal growth.</HeaderText>
          <IconContainer>
            <IconWrapper>
              <FaHandHoldingHeart size='25px' color='#000' />
          </IconWrapper>
           <HeaderSubtext>Quality Services</HeaderSubtext>
          <IconWrapper>
           <FaMoneyBill size='25px' color='#000' />
          </IconWrapper>
            <HeaderSubtext>Affordable Prices </HeaderSubtext>
              <ButtonContainer><Button to='/book'>Book Now</Button></ButtonContainer>
          </IconContainer>
      </HeaderContainer>

      <ServiceTitle>Our Expertise</ServiceTitle>
       <ServiceText>At PAX clinic, we pride ourselves on our unmatched expertise in a wide range of mental health services.
        Our dedicated team of professionals specializes in providing comprehensive care tailored to the unique needs of a range of demographics
        while consistently staying up-to-date with the latest research and treatment modalities, ensuring that you receive the highest standard 
        of care. 
       </ServiceText>
       
       <InformationContainer>
        <ServiceCard>
         <ServiceCardHeader>Adolescent Therapy</ServiceCardHeader>
           <ServiceCardContent>Navigating the challenges of adolescence can be overwhelming. Our skilled therapists address 
             the specific issues faced by teenagers, while offering a supportive environment where they can explore their emotions,
            develop coping strategies, and thrive in their personal growth.
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Marriage & Family Therapy</ServiceCardHeader>
          <ServiceCardContent>Strong relationships form the foundation of a fulfilling life. Our compassionate therapists are 
           here to guide Married couples and families through their challenges, fostering effective communication, resolving conflicts,
           and strengthening the bonds that bring you closer together. 
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Couples Therapy</ServiceCardHeader>
          <ServiceCardContent>Strong and fulfilling relationships require effort and understanding. Our skilled therapists specialize in couples
           counseling, where they work with you and your partner to enhance your communication, resolve any conflicts, and strengthen the foundation
           of your relationship.
          </ServiceCardContent>
        </ServiceCard>
         
         <ServiceCard>
          <ServiceCardHeader>Psychiatry</ServiceCardHeader>
           <ServiceCardContent>When it comes to mental health disorders, our psychiatrists are highly trained and experienced in accurate diagnosis,
            medication management, and targeted treatments. We offer comprehensive psychiatric evaluations to ensure perosnalized treatment plans.
          </ServiceCardContent>
         </ServiceCard>

         <ServiceCard>
         <ServiceCardHeader>Corporate Counselling</ServiceCardHeader>
          <ServiceCardContent>We understand that the well-being of your workforce is vital for a thriving business. 
          We collaborate with organizations to create tailored corporate counselling programs designed to address workplace stress,
          improve team dynamics, and enhance leadership skills.
          </ServiceCardContent>
         </ServiceCard>

      </InformationContainer>
     </PageContainer>
    </>
  );
};

export default ServicesPage;