import React, { useState } from "react";

const SignInF = ({ validateUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const signIn = (e) => {
        e.preventDefault();

        // fx validateUSer
        validateUser(email, password)
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Sign In</h1>
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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        ></input>
                        <span 
                            style={{ cursor: 'pointer', marginLeft: '10px' }}
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? '🙈' : '👁'} 
                        </span>
                </div>
                    
            <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignInF;