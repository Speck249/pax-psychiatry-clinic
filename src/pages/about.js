import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import AboutUs from '../components/LandingPage/AboutUs/AboutUs';
import Hero from '../components/LandingPage/Hero/Hero';
import Expertise from '../components/LandingPage/Expertise/Expertise';
import Service from '../components/LandingPage/Service/Service';
import Testimonials from '../components/LandingPage/Testimonials/Testimonials';
import Contact from '../components/LandingPage/Contact/Contact';
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
      <Hero />
      <AboutUs />
      <Expertise />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutPage;