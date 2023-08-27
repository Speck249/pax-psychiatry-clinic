import React, { useState } from 'react'
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';

const Team = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    Medical Team</>
  )
}

export default Team;