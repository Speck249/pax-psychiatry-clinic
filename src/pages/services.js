import React, { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import ServicesPage from '../components/Services/Services';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
   <>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <ServicesPage />
    </>
  );
};

export default Services;