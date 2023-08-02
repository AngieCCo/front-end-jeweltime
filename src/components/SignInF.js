import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from '../firebase'

const SignInF = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            // Signed in 
            const user = userCredential.user;

            console.log("userCredential:", user)
        })
        .catch((error)=> {
            console.log(error.message);
        })
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
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

export default SignInF;