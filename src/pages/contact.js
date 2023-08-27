import React, { useState } from 'react'
import ContactForm from '../components/Contact/Contact';
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <ContactForm />
  </>
  );
};

export default Contact;