import React from "react";
import {
    SidebarContainer,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarItem,
    ButtonContainer,
    SignIn
} from "./SidebarStyling";
import { FaTimes } from "react-icons/fa";


const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <FaTimes size={25} color='#fff' />
        </Icon> 
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarItem to="/" onClick={toggle}>Home</SidebarItem>
            <SidebarItem to="/doctors" onClick={toggle}>Meet Our Doctor</SidebarItem>
            <SidebarItem to="https://medium.com"  target="_blank" onClick={toggle}>Research & Innovation</SidebarItem>
          </SidebarMenu>
          <ButtonContainer>
            <SignIn to="/signin">Sign In</SignIn>
          </ButtonContainer>
        </SidebarWrapper>
      </SidebarContainer>
    );
};

export default Sidebar;