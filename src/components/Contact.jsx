import React, { useRef } from 'react';
import Heading from './Heading';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { useFormik } from 'formik';
import { contactSchema } from '../schemas';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const initialValues = {
        name: "",
        mail: "",
        phone: "",
        message: "",
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: contactSchema,
            validateOnChange: true,
            validateOnBlur: false,

            onSubmit: (values, actions) => {
                emailjs.sendForm('service_a8e3isv', 'template_czb51np', form.current, 'N6jcqnlBvF8iOeGaK')
                    .then((result) => {
                        Success();
                        actions.resetForm();
                    }, (error) => {
                        Failure();
                    });

            },
        })
    const Failure = () => {
        Swal.fire({
            title: "Message Failed to Send",
            text: "There was a problem sending your message. Please try again later.",
            icon: "error"
        });
    }

    const Success = () => {
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you your message has been successfully sent.",
            icon: "success"
        });
    }

    return (
        <>
            <Container id='Contact'>
                <Heading name="Contact" />
                <Fade>
                    <ContactContainer>
                        {/* <CForm ref={form} onSubmit={sendEmail}> */}
                        <CForm ref={form} onSubmit={handleSubmit}>
                            <FormLabel>Name</FormLabel>
                            <FormInput autoComplete='off' type="text" name="name" id='name' value={values.name} onChange={handleChange} onBlur={handleBlur}></FormInput>

                            {touched.name && errors.name ? (
                                <ErrorMessage>{errors.name}</ErrorMessage>
                            ) : null}

                            <FormLabel>Email</FormLabel>
                            <FormInput autoComplete='off' type="email" name="mail" id='mail' value={values.mail} onChange={handleChange} onBlur={handleBlur}></FormInput>

                            {touched.mail && errors.mail ? (
                                <ErrorMessage>{errors.mail}</ErrorMessage>
                            ) : null}

                            <FormLabel>Phone No</FormLabel>
                            <FormInput autoComplete='off' type="tel" name="phone" id='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur}></FormInput>

                            {touched.phone && errors.phone ? (
                                <ErrorMessage>{errors.phone}</ErrorMessage>
                            ) : null}

                            <FormLabel>Message</FormLabel>
                            <FormTextArea name="message" id='message' value={values.message} onChange={handleChange} onBlur={handleBlur}></FormTextArea>

                            {touched.message && errors.message ? (
                                <ErrorMessage>{errors.message}</ErrorMessage>
                            ) : null}

                            <FormButton type="submit">Submit</FormButton>
                        </CForm>
                    </ContactContainer>
                </Fade>
            </Container>
        </>
    )
}

export default Contact

const Container = styled.div`
padding: 80px 50px 0px 50px;
@media (max-width: 1000px) {
   padding: 80px 20px 20px 20px;
}
`
const ContactContainer = styled.div`
display: flex;
margin: auto;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media (max-width: 1000px) {
  padding: 10px;
}
`
const CForm = styled.form`
margin:auto;
display: flex;
flex-direction: column;
padding: 40px;
width: 50%;
@media (max-width: 1000px) {
   padding: 30px 10px;
   width: 100%;
}
`
const FormLabel = styled.label`
font-size: 20px;
margin-bottom: 3px;
margin-left:3px;
margin-top: 2px;
@media (max-width: 1000px) {
  font-size: 15px;
}
`
const FormInput = styled.input`
background-color: #0E2335;
color: white;
outline: none;
border: none;
margin-bottom: 5px;
width: 100%;
height: 45px;
border-radius: 3px;
padding:0px 10px;
@media (max-width: 1000px) {
   width: 95%;
}
`
const ErrorMessage = styled.p`
margin-bottom: 10px;
font-size: 15px;
color: #FF0000;
`

const FormTextArea = styled.textarea`
background-color: #0E2335;
color: white;
outline: none;
border: none;
margin-bottom: 5px;
width: 100%;
height: 80px;
border-radius: 3px;
padding:10px;
resize: none;
@media (max-width: 1000px) {
   width: 95%;
}
`
const FormButton = styled.button`
background-color: #FF0000;
color: white;
outline: none;
border: none;
width: 103%;
height: 50px;
border-radius: 3px;
padding:5px;
cursor: pointer;
font-size: 20px;
text-transform: uppercase;
letter-spacing: 5px;
font-weight: bolder;
transition: 0.5s;
margin-top: 10px;
@media (max-width: 1000px) {
   font-size: 15px;
   font-weight: bold;
   letter-spacing: 3px;
   margin: 8px 0px;
}
&:hover{
    background-color: #F73206 ;
}
`

