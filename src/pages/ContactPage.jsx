import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaHandshake} from 'react-icons/fa';
import "./style.css"

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
    <div className= "container text-center " id="contactContainer">
        <h1 className="fst-normal  fw-bold mt-5 text-uppercase">Contact Me <FaHandshake size={40} style={{ color: '#475053' }}/></h1>
        <div className="d-flex justify-content-center align-items-center" id="aLinks">
      <div className="text-center m-4">
        <a href="https://wa.me/16505446183" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp  id="contactIcons" size={50} style={{ color: '#475053' }} />
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
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />
            <input
              value={subject}
              name="subject"
              onChange={handleInputChange}
              type="text"
              placeholder="Subject"
              className="form-control mb-3"
            />
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="form-control mb-3"
              style={{ height: '120px' }}
            />
            <button type="submit" className="btn btn-outline-primary">Send Feedback</button>
          </form>
        </div>
      </div>
    </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
    </div>
);
};




export default Contact;