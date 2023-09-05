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
    Button,
    ButtonContainer,
    InformationContainer,
    ServiceTitle,
    ServiceText,
    ServiceCard,
    ServiceCardHeader,
    ServiceCardContent
} from './ServicesStyling';


const ServicesPage = () => {
    const averageRating = 4.5;

    return (
    <>
     <PageContainer>
      <HeaderContainer>
       <HeaderText>Customer Rating: {renderStars(averageRating)} </HeaderText>
        <HeaderTitle>Exceptional Healthcare.</HeaderTitle>
          <HeaderText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</HeaderText>
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
       <ServiceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       </ServiceText>
       
       <InformationContainer>
        <ServiceCard>
         <ServiceCardHeader>Adolescent Therapy</ServiceCardHeader>
           <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Adult Therapy</ServiceCardHeader>
          <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Family Therapy</ServiceCardHeader>
          <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Couples Therapy</ServiceCardHeader>
          <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </ServiceCardContent>
        </ServiceCard>
        
        <ServiceCard>
         <ServiceCardHeader>Marriage Counselling</ServiceCardHeader>
          <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
         </ServiceCardContent>
        </ServiceCard>
         
         <ServiceCard>
          <ServiceCardHeader>Psychiatry</ServiceCardHeader>
           <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </ServiceCardContent>
         </ServiceCard>

         <ServiceCard>
         <ServiceCardHeader>Corporate Counselling</ServiceCardHeader>
          <ServiceCardContent>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
           sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </ServiceCardContent>
         </ServiceCard>

      </InformationContainer>
     </PageContainer>
    </>
  );
};

export default ServicesPage;