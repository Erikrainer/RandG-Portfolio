import { useState } from 'react';
import './style.css';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'firstName') {
        setFirstName(inputValue);
    } else {
        setLastName(inputValue);
    }
};


const handleFormSubmit = (event) => {
    event.preventDefault();

    setFirstName('');
    setLastName("");
    setEmail("");
}

if (!validateEmail(email) || !firstName) {
    setErrorMessage('Email or username is invalid');
    return;
  }
  alert(`Hello ${firstName}`);

  return (
    <div className= "container text-center">
        <h1>Hello {firstName} </h1>
        <form className= "form" onSubmit={handleFormSubmit}>
            <input
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First name"
            />
            <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last name"
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
            />
            <button type="submit">Submit</button>
        </form>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
    </div>
);
};




export default Form;