import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Services from './pages/services';
import Contact from './pages/contact';
import LogIn from './pages/login';
import Footer from './components/FooterSection/Footer';
import './App.css';


const App = () => {
  return (
    <>
    <Router>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<LogIn />} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
