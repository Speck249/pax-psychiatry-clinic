import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Hero from '../components/Hero/Hero';
import Footer from '../../src/components/Footer/Footer';
import InfoSection from '../components/Hero/InfoSection';
import { sectionOne, sectionThree, sectionTwo } from '../components/Hero/DataFile';

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
    <InfoSection {...sectionOne}/>
    <InfoSection {...sectionTwo} />
    <InfoSection {...sectionThree} />
    <Footer />
    </>
  );
};

export default Home;