import styled from 'styled-components';
import TeamImg from '../../images/TeamBg.jpg';
import '../../fonts/webfont.css';

export const HeaderContainer = styled.div`
  background-image: url(${TeamImg});
  background-size: cover;
  background-position: center;
  height: 100vh; 
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