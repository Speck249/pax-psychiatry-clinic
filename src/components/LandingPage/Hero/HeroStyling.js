import {styled, css } from "styled-components";
import BackgroundImage from '../../../images/Hero.jpg';


export const DisplayLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroSection = styled.section`
   ${ DisplayLayout };
   justify-content: flex-end;
   background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${BackgroundImage});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 90vh;
   overflow: hidden;
`;

export const HeroContent = styled.div`
   ${ DisplayLayout };
   justify-content: center;
   width: 780px;
   max-width: 95%;
   padding: 1.5rem 1rem;
   margin: 0 0.5rem 2.5rem 0.5rem;
   gap: 15px; 
   text-align: center;
   color: #fff;
   background-color: rgb(255 255 255 0.3);
   backdrop-filter: blur(35px);
   overflow: hidden; 
`;

export const SectionTitle = styled.h2`
   font-size: 2rem;
   font-weight: 700;
   letter-spacing: 0.4rem;

   @media screen and (max-width: 380px) {
      font-size: 1.35rem;
 }
`

export const HeroHighlight = styled.p`
   font-size: 1rem;
   letter-spacing: 0.12rem;
   line-height: 2;

   @media screen and (max-width: 380px) {
      font-size: 0.75rem;
   }
`;