import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import {
    PageContainer,
    FormContainer,
    FormWrap,
    FormContent,
    Form,
    FormTitle,
    RequiredIndicator,
    FormLabel,
    FormInput,
    StyledTextarea,
    ButtonContainer,
    FormButton
} from './BookNowStyling';
import NavigationBar from '../Navbar/Navigation';

const BookAppointment = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

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

      // Save appointment data to Firebase
      const docRef = await addDoc(collection(db, 'appointments'), appointmentData);

      // Clear form fields
      setFullName('');
      setEmail('');
      setDate('');
      setTime('');
      setMessage('');

      // Set booking status to true
      setBookingStatus(true);
      setTimeout(() => {
        setBookingStatus(null);
      }, 5000);
    } catch (error) {
      // Set booking status to false
      setBookingStatus(false);

      setTimeout(() => {
        setBookingStatus(null);
    }, 5000);
  }
};

return (
    <>
        <PageContainer>
        <NavigationBar />
        <FormContainer>
          <FormWrap>
            <FormContent>
              <Form onSubmit={handleSubmit}>
              {bookingStatus === true && <Alert variant="success">Appointment Booked!</Alert>}
              {bookingStatus === false && <Alert variant="danger">Appointment Booking Failed. Give it another Try.</Alert>}
              <FormTitle>BOOK YOUR FIRST FREE APPOINTMENT!</FormTitle>

        <div><RequiredIndicator><FormLabel>Full Name</FormLabel> *</RequiredIndicator></div>
        <div>
          <FormInput
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} required />
        </div>
        
        <div><RequiredIndicator><FormLabel>Email</FormLabel> *</RequiredIndicator></div>
        <div>
          <FormInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div><RequiredIndicator><FormLabel>Date</FormLabel> *</RequiredIndicator></div>
          <div>
            <FormInput
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)} required />
          </div>

        <div><RequiredIndicator><FormLabel>Time</FormLabel> *</RequiredIndicator></div>
          <div>
            <FormInput
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)} required />
          </div>

        <div><RequiredIndicator><FormLabel>Message</FormLabel> *</RequiredIndicator></div>
          <div>
            <StyledTextarea
              rows={3}
              value={message}
              onChange={handleTextareaChange} required />
            </div>

        <ButtonContainer><FormButton variant="primary" type="submit">Submit</FormButton></ButtonContainer>
        </Form>
       </FormContent>
      </FormWrap>
     </FormContainer>
    </PageContainer>
  </>  
  );
};

export default BookAppointment;