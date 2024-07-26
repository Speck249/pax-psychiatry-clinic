import styled, { css } from 'styled-components';
import aisha from '../../images/Aisha.jpg';
import kwame from '../../images/Kwame.jpg';
import nia from '../../images/Nia.jpg';
import zara from '../../images/Zara.jpg';
import tariq from '../../images/Tariq.jpg';
import jabari from '../../images/Jabari.jpg';

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 5rem;
  overflow: hidden;
  background-color: #efefef;
`;

export const TeamIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
  max-width: 95%;
  margin: 6rem 0;
`;

export const SectionTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const SectionDescription = styled.p`
  text-align: center;
  line-height: 2.2;
  padding: 1.5rem 1.2rem;
  margin: 0;
`;

export const ParagraphImg = styled.img`
  display: block;
  max-width: 140px;
  max-height: 70px;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; 
  width: 100%;
  padding: 1rem;
  margin: 0;
  gap: 50px;
  overflow: hidden;
`;

export const SharedStyling = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 380px;
  height: 450px;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  position: absolute;
  width: 250px;
  padding: 0.5rem 0;
  border-radius: 2px;
  transform: translateY(-10px);
  transition: 0.5s all ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MoreDescription = styled.div`
  font-size: 0.85rem;
  text-align: justify;
  line-height: 2.1;
  color: #fff;
  height: 100%;
  padding: 2rem;
  border-radius: 5px;
  opacity: 0;
  transform: translateY(3px);
  transition-property: transform, opacity;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MedicalTeamOne = styled.div`
  ${SharedStyling};
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${aisha});

  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }
   
   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const MedicalTeamTwo = styled.div`
  ${SharedStyling};
  background-image: url(${kwame});

  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }

   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const MedicalTeamThree = styled.div`
  ${SharedStyling};
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${zara});


  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }
   
   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const MedicalTeamFour = styled.div`
  ${SharedStyling};
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${nia});

  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }
   
   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const MedicalTeamFive = styled.div`
  ${SharedStyling};
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${tariq});

  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }
   
   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const MedicalTeamSix = styled.div`
  ${SharedStyling};
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${jabari});

  &:hover, &:focus {
   ${ContentContainer} {
     opacity: 0;
   }
   
   ${MoreDescription} {
     opacity: 1;
     transform: translateY(0);
     transition: all 0.6s ease-in-out;
   }
  }
`;

export const DoctorName = styled.h3`
   font-size: 0.85rem;
   font-weight: 700;
   text-align: center;
   color: #fff;
`;
export const DoctorDescription = styled.p`
   font-size: 0.8rem;
   text-align: center;
   margin: 0;
   color: #fff;
`;