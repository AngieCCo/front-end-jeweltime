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
                <div className="newproject">
                    <Link to={`newproject`}>Create a Project</Link>
                </div>
                <div className="profile">
                    <Link to={`profile`}>Profile</Link>
                </div>
                <div className="signIn">
                    <Link to={`signin`}>Sign In</Link>
                </div>
                <div className="signup">
                    <Link to={`signup`}>Sign Up</Link>
                </div>
                <div className="userProjects">
                    <Link to={`userprojects`}>Your Projects</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar;