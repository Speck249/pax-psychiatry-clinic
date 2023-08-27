import React, { useState } from 'react';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar'
import Hero from '../components/HeroSection/Hero';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Hero />
    </>
  );
};

export default Home;