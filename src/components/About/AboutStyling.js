import styled from 'styled-components';
import AboutImg from '../../images/AboutBg.jpg';
import '../../fonts/webfont.css';

export const HeaderContainer = styled.div`
  background-image: url(${AboutImg});
  background-size: cover;
  background-position: center;
  height: 100vh; 
`;

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  text-align: left;
  padding-top: 10rem;
  padding-left: 25rem;
  margin-left: 35rem;
  width: 50%;
  color: #09798C;
`;

export const HeaderText = styled.h2`
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  text-align: justify;
  padding-left: 25rem;
  margin-left: 35rem;
  width: 60%;
  color: #000;
`;

export const AboutTitle = styled.h2`
   display: flex;
   justify-content: center;
   color: #000;
   font-size: 45px;
   margin-top: 1rem;
   margin-bottom: 9px;
`;

export const AboutText = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   margin-left: 3rem;
   margin-right: 3rem;
   color: #000;
   font-size: 16px;
   font-family: 'Sora', sans-serif;
   font-weight: 200;
   margin-bottom: 2rem;
`;

export const SectionContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
`;

export const ValueContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #fff;
   margin-top: 1rem;
   border-width: 20px;
`;

export const ValueContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.2rem;
  border-style: solid;
  border-width: 0px 2px 0px 0px;
  border-color: #09798C;
`;

export const ValueTitle = styled.h2`
  font-size: 30px;
  color: #000;
  margin-bottom: 1rem;
  margin-top: 10px;
`;

export const ValueText = styled.div`
  font-size: 16px;
  color: #000;
  text-align: justify;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-family: 'Sora', sans-serif;
  font-weight: 200;
`;

export const VisionContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-top: 20px;
`;

export const VisionContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #fff;
`;

export const VisionContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const VisionTitle = styled.h2`
  font-size: 30px;
  color: #000;
  margin-bottom: 1rem;
  margin-top: 10px;
`;

export const VisionText = styled.div`
  font-size: 16px;
  color: #000;
  text-align: justify;
  margin-left: 2rem;
  margin-right: 2rem;
`;

/*export const ImageContainer = styled.div`
  background-image: url(${FacilityImg});
  background-size: cover;
  background-position: center;
  height: 60vh;
  padding-top: 4rem; 
  background-color: green;
`;*/

export const FacilityTitle = styled.h2`
   display: flex;
   justify-content: center;
   color: #000;
   font-size: 45px;
   margin-top: 2rem;
   margin-bottom: 10px;
`;

export const FacilityText = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   margin-left: 2.5rem;
   margin-right: 2.5rem;
   color: #000;
   font-size: 16px;
   font-family: 'Sora', sans-serif;
   font-weight: 200;
   text-align: justify;
   margin-bottom: 4rem;
`;