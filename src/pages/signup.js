import React, { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import SignupPage from '../components/Entry/Signup';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };

return (
  <>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <SignupPage />
  </>
  );
};

export default SignUp;