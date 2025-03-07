import { styled } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const NavbarHeader = styled.header `
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 3rem;
  z-index: 10;
  overflow: hidden;
  background-color: #fff;

  @media screen and (max-width: 1024px) {
    padding: 1rem 1.2rem;
    background-color: #09798C;
  }

  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    display: flex;
    margin-right: auto;
    margin-left: 0;
  }
`;

export const LogoContainer = styled(LinkRouter)`
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  max-width: 85px;
  max-height: 80px;

  @media screen and (max-width: 1150px) {
    display: none;
  }
`;

export const SidebarLogo = styled.img `
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    max-width: 90px;
    max-height: 80px;
    margin: 0.2rem 0;
    padding: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    margin-left: auto;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 750px;
  overflow: hidden;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: inherit;
  padding: 0.5rem 0;
  margin: 0;

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 100%;
    height: inherit;
  }
`;

export const NavbarItemStyle = styled.li`
  font-weight: bold;
  text-decoration: none;
  color: #09798C;
  list-style: none;

  &:active {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ScrollLink = styled(LinkScroll)`
  font-weight: 700;
  text-decoration: none;
  color: #09798C;
  list-style: none;

  &:hover {
    cursor: pointer;
  }
`;

export const RouterLink = styled(LinkRouter)`
  font-weight: 700;
  text-decoration: none;
  color: #09798C;
  list-style: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0; 
  
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SignIn = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #09798C;
`;