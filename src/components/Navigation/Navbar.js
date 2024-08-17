import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavbarHeader,
  LogoContainer,
  NavbarLogo,
  SidebarLogo,
  MobileIcon,
  NavbarWrapper,
  NavbarMenu,
  ScrollLink,
  RouterLink,
  ButtonContainer,
  SignIn
} from "./NavbarStyling";
import MainLogo from "../../images/PrimaryLogo.png";
import SecondaryLogo from "../../images/SecondaryLogo.png";
import { FaBars } from "react-icons/fa";

const scrollToTop = () => {
  scroll.scrollToTop(500);
}


const Navbar = ({ toggle }) => {
  return (
    <NavbarHeader>
        <LogoContainer onClick={scrollToTop}>
          <NavbarLogo src={MainLogo} width={132} height={125} alt="Pax Logo" />
        </LogoContainer>
        <SidebarLogo src={SecondaryLogo} width={143} height={128} alt='Pax Logo' />
        <MobileIcon onClick={toggle}>
          <FaBars size={40} />
        </MobileIcon>
        <NavbarWrapper>
          <NavbarMenu>
            <RouterLink to="/">Home</RouterLink>
            <ScrollLink activeClass="active" to="about-section" spy={true} smooth={true} offset={-100} duration={500}>About Us</ScrollLink>
            <ScrollLink activeClass="active" to="service-section" spy={true} smooth={true} offset={-100} duration={500}>Medical Services</ScrollLink>
            <RouterLink to="/doctors">Our Doctors</RouterLink>
            <RouterLink to="https://medium.com" target="_blank">Research & Innovation</RouterLink>
          </NavbarMenu>
        </NavbarWrapper>
        <ButtonContainer>
          <SignIn to="/signin">Sign In</SignIn>
        </ButtonContainer>
    </NavbarHeader>
  )
};

export default Navbar;