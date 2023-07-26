import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav className="NavBar__container">
                <div className="home">
                    <Link to={`Home`}>Home</Link>
                </div>
                <div className="signUp">
                    <Link to={`signup`}>Sign Up</Link>
                </div>
                <div className="newproject">
                    <Link to={`newproject`}>Create a Project</Link>
                </div>
                <div className="signIn">
                    <Link to={`signin`}>Sign In</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;