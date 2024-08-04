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
   width: 750px;
   max-width: 95%;
   padding: 1rem 0;
   margin: 0 0.5rem 2.5rem 0.5rem; 
   background-color: rgb(255 255 255 0.3);
   backdrop-filter: blur(35px);
   overflow: hidden;
`;

export const SectionTitle = styled.h2`
   font-size: 2rem;
   font-weight: 700;
   text-align: center;
   color: #fff;
   letter-spacing: 0.3rem;
   padding: 0.5rem 0;
   margin: 0;
`

export const HeroHighlight = styled.p`
   font-size: 0.9rem;
   text-align: center;
   color: #fff;
   letter-spacing: 0.2rem;
   line-height: 2;
`;