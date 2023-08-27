import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

export const Button = styled(LinkRouter)`
  outline: none;
  border: none;
  background-color: ${({primary}) => primary? '#09798C': '#000'};
  color: ${({primary}) => primary ? '#000': '#e6e6e6'};
  font-size: ${({font}) => font ? '10px': '16px'};
  justify-content: center;
  align-items: center;
  border-radius: ${({big}) => big ? '30px': '20px'};
  padding: ${({big}) => big ? '18px 30px' : '10px 20px'};
  transition: all 0.3s ease;
  cursor: pointer;
  
&:hover{
    background-color: ${({primary}) => primary ? '#000': '#09798C'};  
    transform: translateY(-0.5rem) scale(1.02);
    color: #fff;
}

&:active{
    transform: translateY(0.5rem);
}

@media only screen and (max-width: 1000px) {
    padding: ${({big}) => big ? '16px 30px' : '10px 15px'};
    font-size: ${({font}) => font ? '16px': '16px'};
}

@media only screen and (max-width: 375px) {
    padding: ${({big}) => big ? '12px 20px' : '10px 12px'};
    font-size: ${({font}) => font ? '16px': '16px'};
}
`;