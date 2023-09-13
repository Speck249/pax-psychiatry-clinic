import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import NavigationBar from '../Navbar/Navigation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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


const MySwal = withReactContent(Swal);

/* Creates Booking page layout for the website. */
/* Firebase configuration for storing booking data from users. */
const BookAppointment = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);
  const navigate = useNavigate();

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

      setTimeout(() => {
        setBookingStatus(null);
      }, 4000);

      MySwal.fire({
        title: 'Appointment Booked! Create An Account?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/signup');
        } else {
          navigate('/');
        }
      });
    } catch (error) {
      setBookingStatus(false);

      setTimeout(() => {
        setBookingStatus(null);
    }, 4000);
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
            {bookingStatus === false && (
              <Alert variant="danger">Appointment Booking Failed. Give it another Try.</Alert>
            )}
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
              onChange={(e) => setMessage(e.target.value)} required />
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