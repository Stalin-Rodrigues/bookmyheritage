import React from 'react';
import { Button } from './ui/button';

export default function Contact() {
  const containerStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white', // Changed background color to white
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const leftHalfStyle = {
    width: '50%',
    height: '85%',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const rightHalfStyle = {
    width: '50%',
    height: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const formStyle = {
    width: '80%',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '15px',
    resize: 'vertical',
  };

  const headingStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'black',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={leftHalfStyle}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60220.667659535466!2d72.79195486341779!3d19.378168750196682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae956bc1587b%3A0x864f53a94baa5145!2sVasai-Virar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676138045471!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 'none', borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
      <div style={rightHalfStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <form action="https://formspree.io/f/mqkobvvb" method="post" style={formStyle}>
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..." style={inputStyle} />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your Email..." style={inputStyle} />
          <label htmlFor="subject">Message</label>
          <textarea id="Message" name="Message" placeholder="Write something..." style={{ ...inputStyle, height: '150px' }}></textarea>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}