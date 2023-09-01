import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import AboutPage from '../components/About/About';
import Footer from '../../src/components/Footer/Footer';

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
  <Navbar toggle={toggle}/>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <AboutPage />
  <Footer />
  </>
  );
};

export default About;
