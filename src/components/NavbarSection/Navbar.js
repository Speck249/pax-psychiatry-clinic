import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
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
            <NavbarLogo to='/'>PAX</NavbarLogo>
            <MobileIcon onClick={toggle}>
            <FaBars />
            </MobileIcon>
            <NavbarMenu>
              <NavbarItems>
                <NavbarLink to='/about'>ABOUT</NavbarLink>
              </NavbarItems>
              <NavbarItems>
                <NavbarLink to='/team'>OUR TEAM</NavbarLink>
              </NavbarItems>
              <NavbarItems>
                <NavbarLink to='/services'>SERVICES</NavbarLink>
              </NavbarItems>
              <NavbarItems>
                <NavbarLink to='https://medium.com/' target='_blank'>BLOG</NavbarLink>
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