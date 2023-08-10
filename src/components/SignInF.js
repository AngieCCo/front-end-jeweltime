import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import './SignInF.css' 

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
            <Card style={{ width: '30rem', margin: 'auto' }} >
            <div className="signIn-form">
            <Card.Body>
                    <Card.Title class="text-center fw-bold">Sign In</Card.Title>
                    <form onSubmit={signIn}>
                        <br/>
                        <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                required
                                className="form-control"
                            ></input>
                            <br/>
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
                                className="form-control"
                                style={ { marginRight: '10px'}}
                                ></input>
                                <span 
                                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? '🙈' : '👁'} 
                                </span>
                        </div>
                    <div>
                    <br/>
                    <button type="submit" className="btn btn-success w-100 mt-2">Sign In</button>
                    </div>
                    
                </form>
                </Card.Body>
            </div>
            </Card>
        </div>
    )
}

export default SignInF;