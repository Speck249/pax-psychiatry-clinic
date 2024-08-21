import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import {
  MainContainer,
  ContactHeader,
  SectionTitle,
  ContactSection,
  Form,
  FormContent,
  FormLabel,
  FormInput,
  Textarea,
  Submit,
  InformationContainer,
  ContentContainer,
  ContactBrief,
  ContactDetail,
  AddressContainer
} from "./ContactStyling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobilePhone, faLocationDot, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [contactStatus, setContactStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        fullName,
        email,
        subject,
        message,
      };

      const docRef = await addDoc(collection(db, 'contacts'), contactData);

      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setContactStatus(true);
      setTimeout(() => {
        setContactStatus(null);
      }, 5000);
    } catch (error) {
      setContactStatus(false);

      setTimeout(() => {
        setContactStatus(null);
      }, 5000);
    }
  };
  
  return (
    <MainContainer>
      <ContactHeader>
        <SectionTitle>Contact Our Team</SectionTitle>
      </ContactHeader>
      <ContactSection>
          <Form>
             {contactStatus === true && <Alert variant="success">Submitted. Check your email for updates!</Alert>}
             {contactStatus === false && <Alert variant="danger">Submission Failed. Please try again.</Alert>}
            <FormContent>
              <FormLabel htmlFor='fullName'>Full Name</FormLabel>
              <FormInput id='fullName' type='text' required autoComplete='on' autoFocus />          
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput id='email' type='email' required autoComplete='on' /> 
              <FormLabel htmlFor='subject'>Subject</FormLabel>
              <FormInput id='subject' type='text' required autoComplete='off' />          
              <FormLabel htmlFor='message'>Message</FormLabel>
              <Textarea id='message' type='textarea' rows={4} cols={2} placeholder="What's on your mind?" required autoComplete='off' />
              <Submit onClick={handleSubmit}>Send Message</Submit>
            </FormContent>
          </Form>
        <InformationContainer>
          <ContentContainer>
            <strong>Chat with us</strong>
            <ContactBrief>Our patient support team is available Mon - Sun, 8am - 9pm.</ContactBrief>
            <ContactDetail>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{color: "#000", marginRight: "0.5rem"}} /> Pax Clinic Support <br />
            </ContactDetail>
            <ContactDetail>
              <FontAwesomeIcon icon={faMobilePhone} size="lg"  style={{color: "#000", marginRight: "0.5rem"}} /> +254-206-519-213
            </ContactDetail>
            <ContactDetail>
              <FontAwesomeIcon icon={faEnvelope} size='lg'  style={{color: "#000", marginRight: "0.5rem"}} /> support@paxclinic.com<br /> 
            </ContactDetail>
            <br /> 
            <strong>Stop by our clinic</strong>
            <ContactBrief>Our health professionals are available Mon - Sat, 7am - 8pm.</ContactBrief>
            <ContactDetail>
              <FontAwesomeIcon icon={faLocationDot} size="lg" style={{color: "#000", marginRight: "0.5rem"}} /> Tom Mboya St, City Centre, Nairobi, Kenya <br />
            </ContactDetail>
            </ContentContainer>
            <AddressContainer>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335424496!2d36.84739685!3d-1.3032089500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2set!4v1723632079894!5m2!1sen!2set" 
                title="PAX Clinic Address"
                width="100%" 
                height="100%" 
                allowfullscreen="" 
                loading="lazy"
                style={{outline:"none", border: "none"}}
                ></iframe>
            </AddressContainer>
            </InformationContainer>
      </ContactSection>
    </MainContainer>
  );
};

export default Contact;