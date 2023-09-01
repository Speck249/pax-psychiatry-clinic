import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="#e6e6e6" expand="lg">
      <Container>
        <Navbar.Brand href='/'>
          <img
            src={process.env.PUBLIC_URL + '/images/Logo.png'}
            alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;