import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const NavbarHeader = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fff;

  @media screen and (max-width: 835px) {
    background-color: #09798C;
  }

  @media screen and (min-width: 835px) and (max-width: 1024px) {
    display: flex;
    margin-right: auto;
    width: 100%;
    height: 12vh;
  }
`;

export const LogoContainer = styled(LinkRouter)`
  cursor: pointer;
`;

export const NavbarLogo = styled.img`
  display: flex;
  margin: 0.2rem 0.5rem;
  max-width: 85px;
  max-height: 80px;

  @media screen and (max-width: 835px) {
    display: none;
  }

  @media screen and (min-width: 835px) and (max-width: 1024px) {
    display: none;
  }
`;

export const SidebarLogo = styled.img `
  display: none;

  @media screen and (max-width: 835px) {
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

  @media screen and (max-width: 835px) {
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
  height: 100%;
  background-color: #fff;

  @media screen and (max-width: 835px) {
    display: none;
  }

  @media screen and (min-width: 835px) and (max-width: 1024px) {
    margin-right: auto;
    width: 650px;
    height: 100%;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-top: 1rem;
  list-style: none;

  @media screen and (min-width: 835px) and (max-width: 1024px) {
    width: 100%;
    height: inherit;
  }
`;

export const NavbarItem = styled(LinkRouter)`
  font-weight: bold;
  text-decoration: none;
  color: #09798C;

  &:active {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  overflow: hidden;
  
  @media screen and (max-width: 835px) {
    display: none;
  }
`;

export const SignIn = styled(LinkRouter)`
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  padding: 0.8rem 2rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background-color: #09798C;

  &:hover {
    cursor: pointer;
  }
`;