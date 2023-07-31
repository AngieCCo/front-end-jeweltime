import React, { useState } from 'react';
import './NewAccountForm.css';

const NewAccountForm = ({ selectedAccount, createNewAccount, updateAccount, deleteAccount }) => {
    const [firstName, setFirstName] = useState(selectedAccount.firstName);
    const [lastName, setLastName] = useState(selectedAccount.lastName);
    const [email, setEmail] = useState(selectedAccount.email);
    const [zipcode, setZipcode] = useState(selectedAccount.zipcode);
    
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
        const accountId = selectedAccount.accountId
        event.preventDefault();  //Put this function inside if and else
        // createNewAccount function is an API call in app for POST
        if (accountId === '' || accountId === undefined) {
            let userData = {
                'firstName':firstName, 'lastName': lastName, 
                'email': email, 'zipcode': zipcode
            }
            console.log("About to create new one", userData)
            createNewAccount(userData);
        // updateAccount function is an API call in app for PUT
        } else {
            let userData = {
                'accountId': accountId, 'firstName':firstName, 
                'lastName': lastName, 'email': email, 'zipcode': zipcode
            }
            console.log("About to update account", userData)
            updateAccount(userData)
        }
    };

    // Function linked to API call deleteAccount
    const toggleDelete = () => {
        console.log('delete button clicked!')
        deleteAccount(selectedAccount.accountId)

        setFirstName('');
        setLastName('');
        setEmail('');
        setZipcode('');
    };

    return (
    <div className="new-account-form__container">
        <h2 className="newAccount">Create an Account</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="id" id='accountId'>Account id: {selectedAccount.accountId}</label>
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
        <button type="submit">Create/Update</button>
        </form>
        <button onClick={toggleDelete}>Delete Account</button>
    </div>
    );
};

export default NewAccountForm;
