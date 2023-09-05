import React, { useState } from 'react';
import SignupPage from '../components/Entry/Signup';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  };

return (
  <>
    <SignupPage />
  </>
  );
};

export default SignUp;