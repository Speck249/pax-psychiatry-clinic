import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import InfoSection from '../components/Hero/InfoSection';
import { featureSection } from '../components/Hero/DataFile';
import Footer from '../../src/components/Footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Hero />
    <InfoSection {...featureSection}/>
    <Footer />
    </>
  );
};

export default Home;