import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../firebase'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed In!
            const user = userCredential.user

            console.log("Inside sigUp, user: ", user)

            // setEmail(user.email)
            // setPassword(user.password)
        })
        .catch((error)=> {
            console.log(error.message);
        })
    }

    return (
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <label htmlFor="email">Email</label>
                    <textarea
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    ></textarea>
                <label htmlFor="password">Password</label>
                    <textarea
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    ></textarea>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default SignUp;
