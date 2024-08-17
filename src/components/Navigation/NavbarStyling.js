import { styled, css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";


export const DisplayLayout = css`
  display: flex;
  align-items: center;
`;

export const NavbarHeader = styled.header `
  ${ DisplayLayout };
  justify-content: space-between;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.25rem 3rem;
  margin: 0;
  z-index: 10;
  overflow: hidden;
  background-color: #fff;

  @media screen and (max-width: 800px) {
    background-color: #09798C;
  }

  @media screen and (min-width: 800px) and (max-width: 1130px) {
    display: flex;
    margin-right: auto;
    margin-left: 0;
    width: 100%;
  }
`;

export const LogoContainer = styled(LinkRouter)`
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  ${ DisplayLayout };
  margin: 0.2rem 0.5rem;
  max-width: 85px;
  max-height: 80px;

  @media screen and (max-width: 1130px) {
    display: none;
  }
`;

export const SidebarLogo = styled.img `
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    max-width: 93px;
    max-height: 80px;
    margin: 0.25rem 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    margin-left: auto;
    color: #fff;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  ${ DisplayLayout };
  width: 800px;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 833px) {
    display: none;
  }

  @media screen and (min-width: 834px) and (max-width: 1130px) {
    margin-right: auto;
  }
`;

export const NavbarMenu = styled.ul`
  ${ DisplayLayout };
  justify-content: space-around;
  width: 100%;
  height: inherit;
  padding: 0.5rem 0;
  margin: 0;

  @media screen and (min-width: 834px) and (max-width: 1130px) {
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

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  ${ DisplayLayout };
  justify-content: center;
  padding: 0.5rem 0;
  
  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const SignIn = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  padding: 0.75rem 1.8rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #09798C;

  &:hover {
    cursor: pointer;
  }
`;