import React from 'react';
import sidebarLogo from '../../images/Sidebar.png'
import {
  Nav,
  LogoContainer,
  Logo,
  MobileIcon,
  SidebarLogo,
  NavbarWrapper,
  NavbarMenu,
  NavbarItem,
  ButtonContainer,
  SignIn,
  Contact,
} from './NavbarStyling';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/Logo.png';


const Navbar = ({toggle}) => {
  return (
      <Nav>
        <LogoContainer>
          <Logo src={logo} width={95} alt='Pax Logo'/>
        </LogoContainer>
            
        <SidebarLogo src={sidebarLogo} width={95} alt='Pax Logo' />    
        <MobileIcon onClick={toggle}>
          <FaBars size={40} color='#fff' />
        </MobileIcon>

        <NavbarWrapper>
          <NavbarMenu>
            <NavbarItem to='/'>About Us</NavbarItem>
            <NavbarItem to='/services'>Medical Services & Care</NavbarItem>
            <NavbarItem to='/doctors'>Meet Our Doctors</NavbarItem>
            <NavbarItem to='#'>Research & Innovation</NavbarItem>
            <NavbarItem to='#'>Giving</NavbarItem>
          </NavbarMenu>
        </NavbarWrapper>

        <ButtonContainer>
          <SignIn to='/signin'>Sign In</SignIn>
          <Contact to='/contact'>Contact Us</Contact>
        </ButtonContainer>
      </Nav>
  );
};

export default Navbar;