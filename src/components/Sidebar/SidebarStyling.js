import styled from 'styled-components';
import { Link as LinkRouter} from 'react-router-dom';

export const SidebarContainer = styled.aside`
  display: grid;
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  right: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  z-index: 999;  
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  transition: 0.2s ease-in-out;
  background-color: #000;
`;

export const Icon = styled.div`
  position: fixed;
  top: 40px;
  right: 45px;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  line-height: 3.1;
`;

export const SidebarItem = styled(LinkRouter)`
  font-size: 22px;
  font-weight: 300;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #09798C;
    transition: 0.3s ease-in-out;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 100%;
  width: 100%;
`;

export const SignIn = styled(LinkRouter)`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  padding: 0.75rem 3rem;
  margin-left: 2rem;
  outline: none;
  text-decoration: none;
  border-radius: 0.6rem;
  border: 2px solid #09798C;
  background-color: #000;
  cursor: pointer;
`;