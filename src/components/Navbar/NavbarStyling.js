import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const NavbarHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 3rem;
    height: auto;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #fff;

    @media screen and (max-width: 868px) {
      background-color: #09798C;
      padding-left: 1rem;
    }
`;

export const LogoContainer = styled.div`
    cursor: pointer;

    @media screen and (max-width: 868px) {
      display: none;
    }
`;

export const NavbarLogo = styled.img`
    display: flex;
    margin: 0.2rem 0.5rem;
    max-width: 85px;
    max-height: 80px;
`;

export const SidebarLogo = styled.img `
    display: none;

    @media screen and (max-width: 868px) {
      display: block;
      margin: 0.2rem 0 0.2rem 2rem;
      max-width: 93px;
      max-height: 85px;
      cursor: pointer;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 868px) {
      display: block;
      margin-right: 1rem;
      color: #fff;
      cursor: pointer;
    }
`;

export const NavbarWrapper = styled.nav`
    display: flex;
    align-items: center;
    width: 780px;
    height: 100%;

    @media screen and (max-width: 868px) {
      display: none;
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
`;

export const NavbarItem = styled(LinkRouter)`
    font-weight: bold;
    color: #09798C;
    text-decoration: none;
    cursor: pointer;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 868px) {
      display: none; 
    }
`

export const SignIn = styled.div`
    font-weight: 400;
    color: #fff;
    padding: 0.8rem 2.5rem;
    outline: none;
    border-radius: 1rem;
    background-color: #09798C;
    cursor: pointer;
`;