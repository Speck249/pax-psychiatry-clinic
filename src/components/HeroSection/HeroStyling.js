import styled from 'styled-components';
import HeroImg from '../../images/HeroBg.png';

export const HeroContainer = styled.div`
   background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${HeroImg});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 75vh;

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
    width: 50%;
    padding-top: 5rem;
    
    @media only screen and (max-width: 500px) {
        width: 50%;
    }
    
    @media only screen and (max-width: 375px) {
        position: absolute;
        align-items: flex-start;
    }
`;

export const HeroTitle = styled.h1`
   font-size: clamp(2rem, 4vw, 4rem);
   letter-spacing: 0.3rem;
   line-height: 1.5;
`;

export const HeroTitleText = styled.span`
   display: block;
`;

export const HeroSubtitle = styled.h2`
   font-size: clamp(1.2rem, 1vw, 1rem);
   color: #e6e6e6;
   letter-spacing: 0.2rem;
   padding-top: 1rem;
   font-style: italic;
`;

export const HeroP = styled.h3`
   font-size: clamp(1rem, 1vw, 1rem);
   color: #e6e6e6;
   letter-spacing: 0.2rem;
   line-height: 1.8;
   padding: 1.5rem 1.5rem;
   
   @media only screen and (max-width: 375px) {
     padding: 1.5rem 0;
}
`;