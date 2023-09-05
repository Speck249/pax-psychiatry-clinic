import styled from 'styled-components';
import WelcomeImg from '../../images/WelcomeBg.jpg';
import { Link as LinkRouter } from 'react-router-dom';


export const PageContainer = styled.div`
 background-image: url(${WelcomeImg});
 height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 7rem;
  padding: 3.5rem 20px;
  border: none;
  border-radius: 6px;
  max-width: 400px;
  width: 100%;
  height: 45vh;
  z-index: 1;
  background-color: #09798C;

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (max-width: 480px) {
    padding: 10px;
  };
`;


export const CardTitle = styled.h1`
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 1.2rem;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const CardBody = styled.h1`
  align-items: center;
  font-size: 16px;
  font-family: 'Sora', sans-serif;
  font-weight: 400;
  color: #fff;
  padding-top: 9px;
  padding-bottom: 10px;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  };
`;

export const Button = styled(LinkRouter)`
   width: 100%;
   padding: 10px 10px;
   margin-top: 8px;
   margin-bottom: 8px;
   border: none;
   border-radius: 4px;
   color: #fff;
   font-size: 15px;
   text-align: center;
   text-decoration: none;
   background-color: #000;
   cursor: pointer;
`;
