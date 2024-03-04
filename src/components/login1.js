import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('phone');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Contact Method:', contactMethod);
  };

  return (
    <div className="contact-form-box">
     
      <img className="contact-form-image" src="moving.png"alt="Your Image Alt Text" />

      
      <form onSubmit={handleSubmit}>
    
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group" >
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="form-group cls">
          <label htmlFor="contact">Contact:</label>
          <select
            className="form-control"
            id="contact"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
          >
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="social-media">Social Media</option>
          </select>
        </div>

     
        <button type="submit" outline="none" className="btn btn-primary submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
