import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../firebase'

const NewAccountForm = ({ selectedAccount, createNewAccount, updateAccount, deleteAccount, setSelectedAccount }) => {
    const [firstName, setFirstName] = useState(selectedAccount.firstName);
    const [lastName, setLastName] = useState(selectedAccount.lastName);
    const [email, setEmail] = useState(selectedAccount.email);
    const [zipcode, setZipcode] = useState(selectedAccount.zipcode);
    const [password, setPassword] = useState('');
    const [firebaseId, setFirebaseId] = useState(selectedAccount.firebaseId);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Create new account form
    const signUp = (e) => {

        e.preventDefault();
    
        const accountId = selectedAccount.accountId 
        if (accountId === '' || accountId === undefined) {

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed In!
                const user = userCredential.user
                console.log("Inside sigUp, userId: ", user.uid)
                let userId = user.uid
                setFirebaseId(userId)
                console.log(firebaseId)

                let userData = {
                    'firstName':firstName, 'lastName': lastName, 
                    'email': email, 'zipcode': zipcode,
                    // CHANGE: USE THE UPDATED USERID DIRECTLY INSTEAD OF USING THE STATE
                    'firebaseId': userId,
                }

                console.log("About to create new user", userData)
                // setSelectedAccount(userData)
                createNewAccount(userData);
                
                // For alerts
                alert("New Account Created! ✅")
            })
            .catch((error)=> {
                console.log(error.message);
            })

        } else {
            let userData = {
                'accountId': accountId, 'firstName':firstName, 
                'lastName': lastName, 'zipcode': zipcode, 'firebaseId': firebaseId
            }
            console.log("About to update account", userData)
            updateAccount(userData)
            alert("Account Updated! ✅")
            // setSelectedAccount(userData);
        }
    };

    // Function linked to API call deleteAccount
    const toggleDelete = () => {
        console.log('delete button clicked!')
        deleteAccount(selectedAccount.accountId)
        alert("Account Deleted! 🗑️")

        setFirstName('');
        setLastName('');
        setEmail('');
        setZipcode('');


    };


    return (
    <div className="new-account-form__container">
        <h2 className="newAccount">Create an Account</h2>
        <form className="form__container" onSubmit={signUp}>
            {/* <label htmlFor="id" id='accountId'>Account id: {selectedAccount.accountId}</label> */}
            <label htmlFor="firstName">First Name</label>
            <textarea
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
            ></textarea>
        <label htmlFor="lastName">last Name</label>
            <textarea
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            required
            ></textarea>
        <label htmlFor="lastName">Email</label>
            <textarea
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            ></textarea>
        <label htmlFor="zipcode">Zipcode</label>
            <textarea
            type="text"
            id="zipcode"
            name="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="Enter your zipcode"
            required
            ></textarea>
        <label htmlFor="password">Password</label>
        <div style={{ display: 'flex', alignItems: 'center' }}> 
            <input
            type={showPassword ? "text" : "password"} 
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            ></input>
            <span 
                style={{ cursor: 'pointer', marginLeft: '10px' }}
                onClick={togglePasswordVisibility}
            >
                {showPassword ? '🙈' : '👁'} 
            </span>
        </div>
        <button type="submit">Create / Update Account</button>
        </form>
        <button onClick={toggleDelete}>Delete Account</button>
    </div>
    );
};
export default NewAccountForm;
