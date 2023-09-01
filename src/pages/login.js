import React, { useState } from 'react';
import LoginPage from '../components/Entry/LogIn';

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };

return (
  <>
    <LoginPage />
  </>
  );
};

export default LogIn;