import React from "react";
import {
  NavbarSection,
  LogoContainer,
  NavbarLogo,
  SidebarLogo,
  MobileIcon,
  NavbarWrapper,
  NavbarMenu,
  NavbarItem,
  ButtonContainer,
  SignIn
} from "./NavbarStyling";
import MainLogo from "../../images/PrimaryLogo.png";
import SecondaryLogo from "../../images/SecondaryLogo.png";
import { FaBars } from "react-icons/fa";


const Navbar = ({toggle}) => {
  return (
    <NavbarSection>
        <LogoContainer to='/'>
          <NavbarLogo src={MainLogo} width={132} height={125} alt="Pax Logo" />
        </LogoContainer>

        <SidebarLogo src={SecondaryLogo} width={143} height={128} alt='Pax Logo' />
        <MobileIcon onClick={toggle}>
          <FaBars size={40} />
        </MobileIcon>

        <NavbarWrapper>
          <NavbarMenu>
            <NavbarItem to='/'>About Us</NavbarItem>
            <NavbarItem to='#Services'>Medical Services</NavbarItem>
            <NavbarItem to='/doctors'>Meet Our Doctors</NavbarItem>
            <NavbarItem to='#'>Research & Innovation</NavbarItem>
          </NavbarMenu>
        </NavbarWrapper>

        <ButtonContainer>
          <SignIn to='/signin'>Sign In</SignIn>
        </ButtonContainer>
    </NavbarSection>
  )
};

export default Navbar;