import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Services from './pages/services';
import Contact from './pages/contact';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import Book from './pages/book';
import ProfilePage from './components/PrivatePages/ProfilePage';
import PrivateRoute from './components/PrivatePages/PrivateRoute';

import './App.css';

function App() {
  const isAuthenticated = true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;