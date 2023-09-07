import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const PageContainer = styled.div`
  background-color: #e6e6e6;
`;

export const Button = styled(LinkRouter)`
   width: 15%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 0.7rem 1.3rem;
   border-radius: 3px;
   background-color: ${({primary}) => primary ? '#09798C': '#000'};
   color: ${({primary}) => primary ? '#000': '#fff'}; 
   font-size: 18px;
   text-decoration: none;
   transition: all 0.3s ease;
   cursor: pointer;
   margin-top: -80px;
   margin-bottom: 1.5rem;
   margin-left: 40rem;
  
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

@media only screen and (max-width: 1000px) {
    padding: ${({big}) => big ? '16px 30px' : '10px 15px'};
    font-size: ${({font}) => font ? '16px': '16px'};
    text-decoration: none;
}

@media only screen and (max-width: 375px) {
    padding: ${({big}) => big ? '12px 20px' : '10px 12px'};
    font-size: ${({font}) => font ? '16px': '16px'};
    text-decoration: none;
}
`;
