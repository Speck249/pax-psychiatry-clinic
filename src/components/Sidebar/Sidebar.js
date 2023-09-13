import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarButtonWrap,
    SidebarRoute
} from './SidebarStyling';

/* Creates website navigation sidebar to be used in minimized screen or mobile dimensions. */ 
const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='/services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink>Blog</SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SidebarButtonWrap>
                    <SidebarRoute to="/login">Sign In</SidebarRoute>
                </SidebarButtonWrap>
            </SidebarWrapper>
        </SidebarContainer>
    </>
  );
};

export default Sidebar;