import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn ,MDBTextArea} from 'mdb-react-ui-kit';
import {  useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card } from "react-bootstrap";
export default function Contact() {
  const  form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t8dtq28",
        "template_dc7esqm",
     form.current,
        "f5LZlLBzQBiHQQ1Nf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div dir="rtl" className="d-flex justify-content-center">
      <Card style={{ width: '26rem' }} className="d-flex justify-content-center align-items-center mt-4">
    <form ref={form} onSubmit={sendEmail} id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>צור קשר</h2>

      <MDBInput label='שם' v-model='name' wrapperClass='mb-4' name="user_name"  />

      <MDBInput type='email' label='כתובת מייל' v-model='email' wrapperClass='mb-4' name="user_email" />

      <MDBInput label='מספר טלפון' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='הודעה'  name="message"/>

      <MDBBtn type="submit" value="Send" color='primary' block className='my-4'>
        שלח
      </MDBBtn>
    </form>
    </Card>
    </div>
  );
}
    

