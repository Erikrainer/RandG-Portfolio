import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaHandshake } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ContactPage.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name && email && subject && message) {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject,
        message,
      };

      emailjs.send(
        'service_xllkrti',
        'template_xb19853',
        templateParams,
        'tYU8bm_tqMYvc48EF'
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitted(true);
          setErrorMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      setErrorMessage('Please fill out all fields');
    }
  };

  return (
    <div className="container text-center" id="contactContainer">
      <h1 className="fst-normal fw-bold mt-5 text-uppercase">
        Contact Me <FaHandshake size={40} style={{ color: '#475053' }} />
      </h1>
      <div className="d-flex justify-content-center align-items-center" id="aLinks">
        <div className="text-center m-4">
          <a href="https://wa.me/16505446183" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp id="contactIcons" size={50} style={{ color: '#475053' }} />
            <div>WhatsApp</div>
          </a>
        </div>
        <div className="text-center m-4">
          <a href="mailto:rainer.erik70@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope id="contactIcons" size={50} style={{ color: '#475053' }} />
            <div>Email</div>
          </a>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="form-group" onSubmit={handleFormSubmit}>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                className="form-control mb-3"
                required
              />
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                className="form-control mb-3"
                required
              />
              <input
                value={subject}
                name="subject"
                onChange={handleInputChange}
                type="text"
                placeholder="Subject"
                className="form-control mb-3"
                required
              />
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                placeholder="Message"
                className="form-control mb-3"
                style={{ height: '120px' }}
                required
              />
              <button type="submit" className="btn btn-outline-primary">Send Feedback</button>
            </form>
            {isSubmitted && (
              <div className="alert alert-success mt-3">
                Email sent successfully!
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger mt-3">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
