import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  position: sticky;
  height: 80px;
  top: 0;
  z-index: 10;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  
  @media screen and (max-width: 968px) {
    transition: 0.7s all ease;
    background-color: #09798C;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 70%;
  max-width: 1100px;
  width: 100%;
  z-index: 1;
`;

export const NavbarLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
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
    transform: translate(-100%, 70%);
    cursor: pointer;
   }
`;

export const NavbarMenu = styled.ul`
   align-items: center;
   text-align: center;
   display: flex;
   list-style: none;
   margin-left: 35px;

   @media screen and (max-width: 768px) {
    display: none;
   }
`;

export const NavbarItems = styled.li`
  height: 70px;
`;

export const NavbarLink = styled(LinkRouter)`
  display: flex;
  padding: 0 1rem;
  color: #09798C;
  align-items: center;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    border-bottom: 2px solid #09798C;
  }
`;

export const NavbarButton = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -45px;
  margin-left: -30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarButtonLink = styled(LinkRouter)`
   background-color: #000;
   color: #fff;
   outline: none;
   padding: 0.7rem 1.3rem;
   border-radius: 3px;
   border: none;
   text-decoration: none;
   font-size: 1rem;
   white-space: nowrap;
   text-decoration: none;
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