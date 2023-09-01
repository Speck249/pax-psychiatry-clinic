import React, { useState } from 'react';
import BookAppointment from '../components/Appointment/BookNow';

const Book = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <BookAppointment />
    </>
  );
};
export default Book;