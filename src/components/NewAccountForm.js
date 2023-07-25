import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewAccountForm.css';

const NewAccountForm = ({ createNewAccount }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipcode, setZipcode] = useState('');
    
    // F(x)s that handles user input
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleZipcode = (event) => {
        setZipcode(event.target.value);
    };


    // Create new account form
    const handleSubmit = (event) => {
        event.preventDefault();
        // createNewAccount function is an API call in app
        createNewAccount({ 
            'firstName':firstName, 'lastName': lastName, 
            'email': email, 'zipcode': zipcode 
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setZipcode('');
    };

    return (
    <div className="new-account-form__container">
        <h2 className="newAccount">Create an Account</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <textarea
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
            placeholder="Enter your first name"
            required
            ></textarea>
        <label htmlFor="lastName">last Name</label>
            <textarea
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleLastName}
            placeholder="Enter your last name"
            required
            ></textarea>
        <label htmlFor="lastName">Email</label>
            <textarea
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email address"
            required
            ></textarea>
        <label htmlFor="zipcode">Zipcode</label>
            <textarea
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={handleZipcode}
            placeholder="Enter your zipcode"
            required
            ></textarea>
        <button type="submit">Create</button>
        </form>
    </div>
    );
};

export default NewAccountForm;
