import React from 'react';
import { FaBars, FaHeartbeat } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  Icon,
  MobileIcon,
  NavbarMenu,
  NavbarItems,
  NavbarLink,
  NavbarButton,
  NavbarButtonLink
} from './NavbarStyling';


const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavbarLogo to='/'><Icon><FaHeartbeat size={45}/></Icon>PAX</NavbarLogo>
            <MobileIcon onClick={toggle}>
            <FaBars />
            </MobileIcon>
            <NavbarMenu>
              <NavbarItems>
                <NavbarLink to='/about'>ABOUT</NavbarLink>
              </NavbarItems>
              <NavbarItems>
                <NavbarLink to='/services'>SERVICES</NavbarLink>
              </NavbarItems>
              <NavbarItems>
                <NavbarLink to='/blog' >BLOG</NavbarLink>
              </NavbarItems>
               <NavbarItems>
                <NavbarLink to='/contact'>CONTACT</NavbarLink>
              </NavbarItems>
            </NavbarMenu>
            <NavbarButton>
              <NavbarButtonLink to='/login'>Log In</NavbarButtonLink>
            </NavbarButton>
            <NavbarButton>
              <NavbarButtonLink to='/signup'>Sign Up</NavbarButtonLink>
            </NavbarButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;