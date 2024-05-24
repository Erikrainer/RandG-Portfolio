import { useState } from 'react';
import './style.css';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'firstName') {
        setFirstName(inputValue);
    } else if (inputType === "subject"){
        setSubject(inputValue);
    } else {
        setMessage(inputValue);
    }
};


const handleFormSubmit = (event) => {
    event.preventDefault();

    setFirstName('');
    setEmail("");
    setSubject("");
    setMessage("");
}

if (!validateEmail(email) || !firstName) {
    setErrorMessage('Email or username is invalid');
    return;
  }

  return (
    <div className= "container text-center">
        <h1>Contact Me</h1>
        <form className= "form" onSubmit={handleFormSubmit}>
            <input
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First name"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <input
                value={subject}
                name="subject"
                onChange={handleInputChange}
                type="text"
                placeholder="Subject"
            />
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Message"
            />
            <button type="submit">Send Feedback</button>
        </form>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
    </div>
);
};




export default Contact;