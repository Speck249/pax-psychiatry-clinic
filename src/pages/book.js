
import React, { useState } from 'react'
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import BookAppointmentPage from '../components/Appointment/BookNow';

const Book = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <BookAppointmentPage />
    </>
  );
};
export default Book;