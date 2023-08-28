import React, { useState } from 'react'
import Navbar from '../components/NavbarSection/Navbar';
import Sidebar from '../components/SidebarSection/Sidebar';
import TeamPage from '../components/Team/Team';

const Team = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
  <>
    <Navbar  toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <TeamPage />
    </>
  )
}

export default Team;