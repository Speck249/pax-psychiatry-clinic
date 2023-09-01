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
} from './ContactStyling';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactStatus, setContactStatus] = useState(null);

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        fullName,
        email,
        subject,
        message,
      };

      // Save contact data to Firebase
      const docRef = await addDoc(collection(db, 'contacts'), contactData);

      // Clear form fields
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Set contact status to true
      setContactStatus(true);
      setTimeout(() => {
        setContactStatus(null);
      }, 5000);
    } catch (error) {
      // Set contact status to false
      setContactStatus(false);

      setTimeout(() => {
        setContactStatus(null);
    }, 5000);
  }
};

  return (
    <>
        <PageContainer>
        <FormContainer>
        {contactStatus === true && <Alert variant="success">Thank you for your message! We will get back to you shortly.</Alert>}
        {contactStatus === false && <Alert variant="danger">Submission Failed. Please try again.</Alert>}
            <FormWrap>
             <FormContent>
               <Form onSubmit={handleSubmit}>
               <FormTitle>GET IN TOUCH</FormTitle>

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

                <div><FormLabel>Subject</FormLabel></div>
                <div>
                <FormInput
                   type="text"
                   id="subject"
                   value={subject}
                   onChange={(e) => setSubject(e.target.value)} />
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

export default ContactForm;