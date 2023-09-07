import styled from 'styled-components';
import HeroImg from '../../images/HeroBg.png';
import '../../fonts/webfont.css';

export const HeroContainer = styled.div`
   background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${HeroImg});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 100vh;

   @media only screen and (max-width: 480px) {
      height: 90vh;
   }

   @media only screen and (max-width: 768px) {
      height: 80vh;
   }

   @media only screen and (max-width: 1440px) {
      height: 70vh;
   }
`;

export const HeroContent = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100%;
   width: 100%;

   @media only screen and (max-width: 480px) {
      text-align: center;
      height: 100%;
   }
`;

export const HeroContentText = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 55%;
   padding-top: 1rem;
   padding-bottom: 1rem;
   margin-top: 9rem;
   background-color: transparent;
   color: #fff;

   @media only screen and (max-width: 768px) {
      width: 80%;
   }

   @media only screen and (max-width: 480px) {
      position: absolute;
      align-items: center;
      width: 70%;
   }
`;

export const HeroTitle = styled.h1`
   font-size: 40px;
   font-family: 'Sora', sans-serif;
   font-weight: 400;
   letter-spacing: 0.3rem;
   margin-bottom: 3px;

   @media only screen and (max-width: 480px) {
      font-size: 24px;
   }
`;

export const HeroParagraph = styled.h3`
   font-size: 17px;
   font-family: 'Sora', sans-serif;
   font-weight: 400;
   letter-spacing: 0.2rem;
   line-height: 1.8;
   padding: 1.3rem;

   @media only screen and (max-width: 480px) {
      font-size: 15px;
   }
`;