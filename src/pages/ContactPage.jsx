import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaAt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './ContactPage.css';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (fullName && email && mobile && message) {
      const templateParams = {
        from_name: fullName,
        from_email: email,
        mobile,
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
          setFullName('');
          setEmail('');
          setMobile('');
          setMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
          setErrorMessage('Failed to send email. Please try again later.');
        }
      );
    } else {
      setErrorMessage('Please fill out all fields');
    }
  };

  return (
    <div className="contact-container">
      {/* LEFT PANEL: Contact Form */}
      <div className="contact-right-panel">
        <h1>Contact Me</h1>
        <p className="contact-description text-center mb-5">
          We’d love to hear from you! Reach out in the way that works best for you, and we’ll respond as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={fullName}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={email}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Phone"
            value={mobile}
            onChange={handleInputChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Questions, Comments or Concerns..."
            value={message}
            onChange={handleInputChange}
            className="form-textarea"
            required
          />
          <button type="submit" className="submit-button">
            Send Feedback
          </button>
        </form>

        {isSubmitted && (
          <div className="alert success-alert">Email sent successfully!</div>
        )}
        {errorMessage && (
          <div className="alert error-alert">{errorMessage}</div>
        )}
      </div>

      {/* RIGHT PANEL: Contact Info */}
      <div className="contact-right-panel">
        <h2>Contact Information</h2>
        <div className="info-item">
          <FaMapMarkerAlt size={30} className="info-icon" />
          <div>
            <strong>Location:</strong>
            <p>Clayton, CA, USA</p>
          </div>
        </div>
        <div className="info-item">
          <FaPhone size={30} className="info-icon" />
          <div>
            <strong>Phone:</strong>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="info-item">
          <FaAt size={30} className="info-icon" />
          <div>
            <strong>Email:</strong>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
