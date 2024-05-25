import { useState } from 'react';

function Contact () {
    const [name, setName] = useState('');
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
    } else if (inputType === 'name') {
        setName(inputValue);
    } else if (inputType === "subject"){
        setSubject(inputValue);
    } else {
        setMessage(inputValue);
    }
};


const handleFormSubmit = (event) => {
    event.preventDefault();

    setName('');
    setEmail("");
    setSubject("");
    setMessage("");
}

  return (
    <div className= "container text-center">
        <h1>Contact Me</h1>
        <form className= "form" onSubmit={handleFormSubmit}>
            <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
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