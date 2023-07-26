import React, { useState } from 'react';
import './SignIn.css';


const SignIn = ({ validateUser }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // F(x)s that handles user input
    const handleUserName = (event) => {
        setUserName(event.target.value);
    };
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    // SignIn account
    const handleSubmit = (event) => {
        event.preventDefault();
        validateUser({ userName, password });
        setUserName('');
        setPassword('');
    };

    return (
    <div className="sign-in-form__container">
        <h2 className="signIn">Sign In</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="userName">User</label>
            <textarea
            type="text"
            id="userName"
            name="userName"
            value={userName}
            onChange={handleUserName}
            placeholder="Enter your user name"
            required
            ></textarea>
        <label htmlFor="lastName">last Name</label>
            <textarea
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            required
            ></textarea>
        <button type="submit">Submit</button>
        </form>
    </div>
    );
};

export default SignIn;