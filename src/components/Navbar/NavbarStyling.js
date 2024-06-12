import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

// Web Breakpoints 
export const Nav = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 15vh;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    transition: 0.3s all ease;
    background-color: #09798C;
  } 
`;  

export const LogoContainer = styled(LinkRouter)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 0;
  left: 3%;

  @media screen and (max-width: 768px) {
    display: none;  
  } 
`;

export const Logo = styled.img`
  background-repeat: no-repeat;
`;

export const SidebarLogo = styled.img`
  display: none;

  @media screen and (max-width: 768px) {
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 6px;
    right: 0;
    transform: translate(-100%, 60%);
  }
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 65%;
  height: auto;

  @media screen and (max-width: 768px) {
    display: none;  
  } 
`;

export const NavbarMenu = styled.ul`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   max-width: 100%;
   width: 100%;
   margin-top: 1rem;
   padding: 1rem;
   list-style: none;
`;

export const NavbarItem = styled(LinkRouter)`
  font-size: 16px;
  font-weight: 400;
  color: #09798C;
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 3%;
  gap: 15px;

  @media screen and (max-width: 768px) {
    display: none;  
  } 
`;

export const SignIn = styled(LinkRouter)`
  font-size: 14px;
  font-weight: 400;
  color: #09798C;
  padding: 0.75rem 2rem;
  outline: none;
  text-decoration: none;
  border-radius: 1rem;
  border: 2px solid #09798C;
  cursor: pointer;
`;

export const Contact = styled(LinkRouter)`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  background-color: #09798C;
  padding: 0.75rem 1rem;
  outline: none;
  text-decoration: none;
  border-radius: 1rem;
  border: 2px solid #09798C;
  cursor: pointer;
`;