import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  z-index: 10;
  top: 0;  
  background-color: #e6e6e6;
  
  @media screen and (max-width: 968px) {
    transition: 0.3s all ease;
    background-color: #09798C;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1200px;
  width: 100%;
  height: 70%;
  z-index: 1;
`;

export const NavbarLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 2rem;
  font-weight: 400;
  color: #09798C;
  text-decoration: none;
  cursor: pointer;

   @media screen and (max-width: 768px) {
    color: #fff;
   }
`;

export const Icon = styled.div`
  padding-right: 6px;
  padding-bottom: 4px;
  color: #09798C;

   @media screen and (max-width: 768px) {
    color: #fff;
   }
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 30px;
    margin-top: -15px;
    transform: translate(-100%, 70%);
    cursor: pointer;
   }
`;

export const NavbarMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   margin-left: 4rem;
   margin-right: 3rem;
   margin-top: 1rem;
   height: 100%;
   text-align: center;

   @media screen and (max-width: 768px) {
    display: none;
   }
`;

export const NavbarItems = styled.li`
  font-size: 17px;
`;

export const NavbarLink = styled(LinkRouter)`
  display: flex;
  padding: 1rem;
  margin-top: 0.5rem; 
  color: #09798C;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #09798C;
  }
`;

export const NavbarButton = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin-right: -70px;
  margin-left: 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: blue;
 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButtonLink = styled(LinkRouter)`
   outline: none;
   padding: 0.6rem 1.2rem;
   border-radius: 4px;
   border: none;
   color: #fff;
   font-size: 1rem;
   text-decoration: none;
   background-color: #000;
   cursor: pointer;

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