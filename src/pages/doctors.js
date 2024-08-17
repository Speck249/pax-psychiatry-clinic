import React, { useState } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Doctors from '../components/Doctors/Doctors';
import Footer from '../components/Footer/Footer';

const DoctorsPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Doctors />
      <Footer />
    </>
  );
};

export default DoctorsPage;