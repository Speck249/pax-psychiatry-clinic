import React from 'react';
import {
    PageContainer,
    HeaderContainer,
    HeaderTitle,
    HeaderText,
    IconContainer,
    IconWrapper,
    HeaderSubtext,
    Button,
    ButtonContainer,
    InformationContainer,
    SectionTitle,
    ServiceText,
    ServiceCard,
    ServiceCardHeader,
    ServiceCardContent
} from './ServicesStyling';
import { FaHandHoldingHeart, FaMoneyBill } from 'react-icons/fa';
import { renderStars } from '../Utility/renderStars';


const ServicesPage = () => {
    const averageRating = 4.5;
  return (
    <>
     <PageContainer>
      <HeaderContainer>
      <HeaderText>Customer Rating: {renderStars(averageRating)} </HeaderText>
      <HeaderTitle>Exceptional Healthcare.</HeaderTitle>
      <HeaderText>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
       sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
       Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
       nisi ut aliquid ex ea commodi consequatur?</HeaderText>
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

      <SectionTitle>Our Expertise</SectionTitle>
       <ServiceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </ServiceText>
      <InformationContainer>
       <ServiceCard>
       <ServiceCardHeader>Adolescent Therapy</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
        </ServiceCard>
        <ServiceCard>
         <ServiceCardHeader>Adult Therapy</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
        <ServiceCard>
         <ServiceCardHeader>Family Therapy</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
        <ServiceCard>
         <ServiceCardHeader>Couples Therapy</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
        <ServiceCard>
         <ServiceCardHeader>Marriage Counselling</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
        <ServiceCard>
         <ServiceCardHeader>Corporate Counselling</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
         <ServiceCard>
         <ServiceCardHeader>Psychiatry</ServiceCardHeader>
        <ServiceCardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </ServiceCardContent>
       </ServiceCard>
      </InformationContainer>

        </PageContainer>
    </>
  );
};

export default ServicesPage;