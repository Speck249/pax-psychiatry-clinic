import styled from 'styled-components';
import HeroImg from '../../images/HeroBg.png';
import '../../fonts/webfont.css';

export const HeroContainer = styled.div`
   background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${HeroImg});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 100vh;

@media only screen and (max-width: 1550px) {
   height: 90vh;
}
`;

export const HeroContent = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   position: relative;
   height: 100%;
   width: 100%;
   color: #fff;
   
   @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
    }
`;

export const HeroContentText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding-top: 10rem;
    
    @media only screen and (max-width: 500px) {
        width: 50%;
    }
    
    @media only screen and (max-width: 375px) {
        position: absolute;
        align-items: flex-start;
    }
`;

export const HeroTitle = styled.h1`
   font-size: 35px;
   font-weight: bold;
   color: #fff;
   letter-spacing: 0.3rem;
   line-height: 1.5;
   margin-bottom: 0.5rem;
`;

export const HeroParagraph = styled.h3`
   font-size: clamp(1rem, 1vw, 1rem);
   color: #fff;
   letter-spacing: 0.3rem;
   line-height: 1.8;
   padding: 1.5rem 1.5rem;
   
   @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
}
`;