import styled from 'styled-components';
import TeamImg from '../../images/TeamBg.jpg';
import { Link as LinkRouter } from 'react-router-dom';
import '../../fonts/webfont.css';

export const PageContainer = styled.div`
   background-color: #e6e6e6;
`;

export const HeaderContainer = styled.div`
   background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${TeamImg});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   height: 80vh;
   
   @media only screen and (max-width: 1550px) {
      height: 90vh;
   }
`;

export const HeaderContent = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   position: relative;
   height: 100%;
   width: 100%;
   
   @media only screen and (max-width: 480px) {
      text-align: center;
      height: 80%;
    }
`;

export const HeaderContentText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

   @media screen and (max-width: 480px) {
      margin-top: 9rem;
   }
`;

export const HeaderTitle = styled.h1`
   font-size: 2rem;
   color: #e6e6e6;
   letter-spacing: 0.3rem;
   line-height: 1.5;
   margin-top: 1rem;
`;

export const Highlight = styled.span`
   color: #09798C;
`;

export const HeaderText = styled.h3`
   padding: 1.5rem 1.5rem;
   font-size: 15px;
   font-family: 'Sora', sans-serif;
   font-weight: 400;
   text-align: center;
   width: 60%;
   color: #e6e6e6;
   line-height: 1.4rem;
   
   @media only screen and (max-width: 480px) {
      width: 100%;
   }
`;

export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-left: 1.5rem;
   margin-top: 5px;
`;

export const Button = styled(LinkRouter)`
   background-color: #000;
   color: #fff;
   outline: none;
   padding: 0.7rem 1.3rem;
   border-radius: 3px;
   border: none;
   text-decoration: none;
   font-size: 1rem;
   margin-top: 1rem;
   transition: all 0.3s ease;
   cursor: pointer;

   &:hover{
    background-color: ${({primary}) => primary ? '#000': '#09798C'};  
    transform: translateY(-0.5rem) scale(1.01);
    color: #fff;
    text-decoration: none;
   }

   &:active{
    transform: translateY(0.5rem);
    text-decoration: none;
   }
`;

export const AboutTitle = styled.h2`
   display: flex;
   text-align: left;
   color: #000;
   font-weight: bolder;
   font-size: 35px;
   margin-top: 4rem;
   margin-bottom: 1rem;
   margin-left: 6rem;
   width: 85%;
   text-decoration: none;

   @media screen and (max-width: 480px) {
      display: flex;
      align-items: center;
      width: 80%;
      margin-left: 2rem;
      text-align: left;
      font-size: 35px;
   }

   @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      width: 90%;
      margin-left: 3.5rem;
      text-align: left;
      font-size: 40px;
   }
`;

export const SectionContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 3rem;

   @media screen and (max-width: 480px) {
      display: flex;
      align-items: center;
      width: 90%;
      margin-left: 3rem;
      text-align: left;
      font-size: 30px;
   }
`;

export const ValueContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ValueText = styled.div`
  font-size: 15px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  color: #000;
  text-align: justify;
  margin-right: 3rem;
  width: 90%;
  text-decoration: none;
`;

export const Paragraph = styled.p`
  text-decoration: none;
  display: block;
`

export const SectionTitle = styled.h2`
   display: flex;
   justify-content: center;
   text-align: center;
   color: #000;
   font-size: 35px;
   font-weight: bolder;
   margin-top: 1rem;
   background-color: #e6e6e6;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e6e6e6;
`;

export const TeamCard = styled.div`
  width: 400px;
  background-color: #fff;
  padding: 12px;
  padding-bottom: 2rem;
  margin: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`

export const TeamCardHeader = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 18px;
  align-items: center;
`;

export const TeamCardContent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  align-items: center;
  margin-top: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  margin-top: 8px;
  padding-left: 1px;
  cursor: pointer;
`;