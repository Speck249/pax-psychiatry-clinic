import React, { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import AboutPage from '../components/About/About';

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
  <Navbar  toggle={toggle}/>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <AboutPage />
  </>
  );
};

export default About;
