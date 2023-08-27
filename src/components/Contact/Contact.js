import React from 'react';
import {
    PageContainer,
    FormContainer,
    FormWrap,
    FormContent,
    FormTitle,
    Form,
    RequiredIndicator,
    FormLabel,
    TextArea,
    FormInput,
    FormButton
} from './ContactStyling'

const ContactForm = () => {
  return (
    <>
        <PageContainer>
        <FormContainer>
            <FormWrap>
             <FormContent>
               <Form>
               <FormTitle>CONTACT US</FormTitle>
                <RequiredIndicator><FormLabel>Full Name</FormLabel> *</RequiredIndicator>
                <FormInput type='text' required></FormInput>
                <RequiredIndicator><FormLabel>Email</FormLabel> *</RequiredIndicator>
                <FormInput type='email' required></FormInput>
                <FormLabel>Subject</FormLabel>
                <FormInput type='text'></FormInput>
                <RequiredIndicator><FormLabel>Message</FormLabel> *</RequiredIndicator>
                <TextArea placeholder='Place your thoughts here...'/>
                <FormButton>Submit</FormButton>
            </Form>
            </FormContent>
            </FormWrap>
            </FormContainer>
        </PageContainer>
    </>
  );
};

export default ContactForm;