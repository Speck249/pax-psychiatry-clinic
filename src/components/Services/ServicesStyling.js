import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import ServicesImg from '../../images/ServicesBg.jpg';
import '../../fonts/webfont.css';

export const PageContainer = styled.div`
  background-color: #e6e6e6;
`;

export const HeaderContainer = styled.div`
  background-image: linear-gradient( to top right, #0b0a0a61, #0b0a0a30), url(${ServicesImg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding-top: 8rem; 

  @media only screen and (max-width: 1550px) {
   height: 90vh;
}
`;

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  font-weight: bolder;
  text-align: left;
  padding-left: 2rem;
  margin-left: 1rem;
  width: 50%;
  color: #09798C;
`;

export const HeaderText = styled.h2`
  font-size: 15px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  text-align: justify;
  padding-right: 18rem;
  padding-left: 2.5rem;
  margin-left: 1rem;
  width: 60%;
  color: #e6e6e6;
  line-height: 1.4rem;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
`;

export const IconWrapper = styled.div`
 margin-right: -32px;
 padding-left: 1.5rem;
 padding-right: 1.3rem;
`;

export const HeaderSubtext = styled.h3`
  font-size: 13px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  text-align: left;
  padding-left: 0.8rem;
  padding-right: -25px;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  color: #e6e6e6;
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
   padding: 0.7rem 1.2rem;
   border-radius: 3px;
   border: none;
   text-decoration: none;
   font-size: 14px;
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

export const SectionTitle = styled.h2`
   display: flex;
   justify-content: center;
   text-align: center;
   color: #000;
   font-size: 35px;
   margin-top: 2rem;
   margin-bottom: 9px;
`;

export const ServiceText = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   margin-left: 3rem;
   margin-right: 3rem;
   margin-bottom: 1.5rem;
   padding-left: 3rem;
   padding-right: 3rem;
   font-size: 16px;
   font-family: 'Sora', sans-serif;
   font-weight: 200;
   color: #000;
   line-height: 1.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ServiceCard = styled.div`
  width: 280px; 
  height: auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 18px;
  border-radius: 8px;
  margin: 1rem;
  margin-bottom: 1.3rem;

  &:hover{
    background-color: ${({primary}) => primary ? '#000': '#09798C'};  
    color: #fff;
    text-decoration: none;
}
`;

export const ServiceCardHeader = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ServiceCardContent = styled.p`
  font-size: 13px;
  text-align: justify;
`;