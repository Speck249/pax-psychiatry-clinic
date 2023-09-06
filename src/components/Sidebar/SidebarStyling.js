import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  display: grid;
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: black;  
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  background: transparent;
  position: absolute;
  outline: none;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  margin-right: 1rem;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
  margin-right: 2.4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarWrapper = styled.div`
   color: #fff;
`;

export const SidebarLink = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #09798C;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarButtonWrap = styled.div`
   display: flex;
   justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  padding: 16px 50px;
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 22px;
  line-height: 1.1rem;
  background: #09798C;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09798C;
  }
`;