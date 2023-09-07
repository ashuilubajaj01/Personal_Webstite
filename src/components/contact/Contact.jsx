import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {MdOutlineEmail} from 'react-icons/md'

import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y7uqdkj', 'template_a9pnrmh', form.current, 'W46N1Ml_2wUIZfkhw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            
            <a href="mailto:ashuilubajaj099@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <CiLinkedin
            className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Ashutosh Bajaj</h5>
            <a href="https://www.linkedin.com/in/ashutosh-bajaj-a51588175/" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            
            <a href="https://api.whatsapp.com/send?phone916205545358" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder="your Message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>
    </section>
  )
}

export default Contact