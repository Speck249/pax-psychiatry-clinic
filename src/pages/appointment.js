import React, { useState } from 'react';
import Appointment from '../components/Appointment/Appointment';

const AppointmentPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Appointment />
    </>
  );
};
export default AppointmentPage;