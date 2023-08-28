import React from 'react';
import {
    PageContainer,
    HeaderContainer,
    HeaderTitle,
    HeaderText,
    IconContainer,
    Icon,
    HeaderSubtext,
    Button,
    ButtonContainer,
    InformationContainer,
    ServiceTitle,
    ServiceText,
    Card,
    CardHeader,
    CardContent
} from './ServicesStyling';
import renderStars from '../Utility/renderStars';
import { FaHandHoldingHeart, FaMoneyBill } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';

const ServicesPage = () => {
  const averageRating = 4.5;

  return (
    <>
     <PageContainer>
      <HeaderContainer>
      <HeaderText>Customer Rating: {renderStars(averageRating)} {averageRating}</HeaderText>
      <HeaderTitle>Exceptional Healthcare.</HeaderTitle>
      <HeaderText>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
       sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
       Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
       nisi ut aliquid ex ea commodi consequatur?</HeaderText>
       <IconContainer>
         <Icon>
           <FaHandHoldingHeart size='25px' color='#09798C' />
         </Icon>
         <HeaderSubtext>Quality Services</HeaderSubtext>
         <Icon>
           <FaMoneyBill size='25px' color='#09798C' />
         </Icon>
         <HeaderSubtext>Affordable Prices </HeaderSubtext>
         <ButtonContainer><Button>Book Now</Button></ButtonContainer>
       </IconContainer>
      </HeaderContainer>

      <ServiceTitle>Our Expertise</ServiceTitle>
       <ServiceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </ServiceText>
      <InformationContainer>
       <Card>
       <CardHeader>Adolescent Therapy</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
        </Card>
        <Card>
         <CardHeader>Adult Therapy</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
        <Card>
         <CardHeader>Family Therapy</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
        <Card>
         <CardHeader>Couples Therapy</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
        <Card>
         <CardHeader>Marriage Counselling</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
        <Card>
         <CardHeader>Corporate Counselling</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
         <Card>
         <CardHeader>Psychiatry</CardHeader>
        <CardContent>
         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </CardContent>
       </Card>
      </InformationContainer>

        </PageContainer>
    </>
  );
};

export default ServicesPage;