import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import About from '../components/About/About';
import InfoSection from '../components/About/InfoSection';
import { featureSection } from '../components/About/DataFile';
import Footer from '../components/Footer/Footer';

const AboutPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <About />
      <InfoSection {...featureSection}/>
      <Footer />
    </>
  );
};

export default AboutPage;