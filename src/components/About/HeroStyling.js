import styled from 'styled-components';
import HeroImg from '../../images/HeroBg.jpg';


export const HeroContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${HeroImg});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   height: 90vh;
   max-height: 100%;
   min-height: auto;
   overflow: hidden;
`;

export const HeroContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 1rem;
   margin: 0.5rem;
   width: auto;
   height: auto;
   position: relative;
   top: 145px;
   background-color: transparent;
   backdrop-filter: blur(15px);
`;

export const HeroTitle = styled.h1`
   font-weight: 700;
   text-align: center;
   color: #fff;
   letter-spacing: 5px;
   line-height: 1.4;
   margin-bottom: 1rem;
`;

export const HeroDescription = styled.p`
   font-weight: 400;
   text-align: center;
   color: #fff;
   letter-spacing: 2.5px;
   line-height: 2;
   margin-bottom: 0;
`;

/* export const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 1rem;
`; */

/* export const VisitServices = styled(LinkRouter)`
   font-weight: 400;
   text-decoration: none;
   color: #fff;
   padding: 0.8rem 1.4rem;
   outline: none;
   border-radius: 1rem;
   cursor: pointer;
`; */