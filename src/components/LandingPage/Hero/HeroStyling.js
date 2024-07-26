import styled from 'styled-components';
import HeroBackground from '../../../images/Hero.jpg';

export const HeroContainer = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
   background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${HeroBackground});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 90vh;
   overflow: hidden;
`;

export const HeroContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-self: center;
   width: 850px;
   max-width: 95%;
   padding: 1rem;
   margin: 0 0.5rem 2.5rem 0.5rem; 
   background-color: transparent;
   backdrop-filter: blur(35px);
`;

export const HeroTitle = styled.h1`
   font-weight: 700;
   text-align: center;
   color: #fff;
   letter-spacing: 5px;
   line-height: 1.5;
`;

export const HeroDescription = styled.p`
   text-align: center;
   color: #fff;
   letter-spacing: 2.5px;
   line-height: 2;
`;