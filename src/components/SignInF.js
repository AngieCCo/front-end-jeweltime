import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import jewelryBench from '../assets/JewelryBench.jpg'; 

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
            {/* <div
                className = "image"
                style = {{
                height: "800px",
                width: "1100px",
                backgroundImage:
                `url(${jewelryBench})`,  
                backgroundSize: "contain",  
                backgroundRepeat: "no-repeat",
                }}
            >
                This div contains a background image.
            </div> */}
            <Card style={{ width: '30rem', margin: 'auto' }} >
                <Card.Body>
                    <Card.Title>Sign In</Card.Title>
                    <form onSubmit={signIn}>
                    {/* <h1>Sign In</h1> */}
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
                    <button type="submit">Sign In</button>
                </form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignInF;