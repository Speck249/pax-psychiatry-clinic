import styled from 'styled-components';
import AboutImg from '../../images/HeaderBg.jpg';
import '../../fonts/webfont.css';

export const HeaderContainer = styled.div`
  background-image: url(${AboutImg});
  background-size: cover;
  background-position: center;
  height: 35vh;
  padding-top: 4rem; 
`;

export const IntroTitle = styled.h2`
   display: flex;
   text-align: left;
   color: #000;
   font-size: 45px;
   margin-top: 1rem;
   margin-left: 2.8rem;
   margin-bottom: 9px;
`;

export const IntroText = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: left;
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
   margin-top: 20px;
`;

export const SectionContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #fff;
`;

export const SectionContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
   display: flex;
   text-align: left;
   color: #000;
   font-size: 45px;
   margin-top: 1rem;
   margin-bottom: 9px;
`;

export const SectionText = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: left;
   margin-left: 3rem;
   margin-right: 3rem;
   color: #000;
   font-size: 16px;
   font-family: 'Sora', sans-serif;
   font-weight: 200;
   margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  font-family: 'Sora', sans-serif;
  font-weight: 200;
`;

export const UnorderedList = styled.ul`
  list-style-type: disc; 
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

