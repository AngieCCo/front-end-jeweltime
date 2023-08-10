import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../firebase'
import './NewAccountForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <>
            <div className="wrapper d-flex align-items-center justify-content-center w-100">
                <div className="signUp">
                    <h2 className="newAccount">Create an Account</h2>
                    <form className="form__container" onSubmit={signUp}>
                        {/* <label htmlFor="id" id='accountId'>Account id: {selectedAccount.accountId}</label> */}
                        <div className="form-group">
                            <br/>
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <textarea className="form-control"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            required
                            ></textarea>
                        </div>
                        <div>
                            <br/>
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <textarea className="form-control"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            required
                            ></textarea>
                        </div>
                        <div>
                        <br/>
                            <label htmlFor="lastName" className="form-label">Email</label>
                            <input className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            ></input>
                        </div>
                        <div>
                            <br/>
                            <label htmlFor="zipcode" className="form-label">Zipcode</label>
                            <textarea className="form-control"
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            placeholder="Enter your zipcode"
                            required
                            ></textarea>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control"
                            type={showPassword ? "text" : "password"} 
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            ></input>
                            <div>
                            <br/>
                            <br/>
                            <span 
                                style={{ cursor: 'pointer', marginLeft: '10px' }}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? '🙈' : '👁'} 
                            </span>
                            </div>
                            
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-2">Create / Update Account</button>
                    </form>
                    <button onClick={toggleDelete} className="btn btn-success w-100 mt-2">Delete Account</button>
                </div>
            </div>
        </>
    );
};
export default NewAccountForm;
