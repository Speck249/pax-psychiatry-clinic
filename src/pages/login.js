import React, { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import LoginPage from '../components/Entry/LogIn';
import SignupPage from '../components/Entry/Signup';
import AuthDetails from '../components/AuthDetails';


const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };

return (
  <>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <LoginPage />
    <SignupPage />
    <AuthDetails />
  </>
  );
};

export default LogIn;