import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const BookAppointmentPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const appointmentData = {
        fullName,
        email,
        date,
        time,
        message,
      };

      const docRef = await addDoc(collection(db, 'appointments'), appointmentData);

      setFullName('');
      setEmail('');
      setDate('');
      setTime('');
      setMessage('');

      setBookingStatus(true);
    } catch (error) {
      setBookingStatus(false);
    }
  };

  return (
    <div className="container">
      <h1>Book Appointment</h1>
      {bookingStatus === true && <Alert variant="success">Appointment booked successfully!</Alert>}
      {bookingStatus === false && <Alert variant="danger">Failed to book appointment. Please try again.</Alert>}

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Preferred Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="time">
          <Form.Label>Preferred Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Book Appointment
        </Button>
      </Form>
    </div>
  );
};

export default BookAppointmentPage;