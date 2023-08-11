import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <div className="brand">
                        <Navbar.Brand href="#home" className="mb-0 fw-bold fs-3">Jewel Time</Navbar.Brand>
                        <img src="/NewLogo.png" width="100" height="100" alt=""></img>
                    </div>
                        <div>
                            <Link to={`Home`} className="nav-link">Home</Link>
                        </div>
                        <div>
                            <Link to={`newproject`} className="nav-link">Create a Project</Link>
                        </div>
                        <div>
                            <Link to={`userprojects`} className="nav-link">My Projects</Link>
                        </div>
                        <div>
                            <Link to={`signup`} className="nav-link">Sign Up</Link>
                        </div>
                        <div className="nav-link">
                            <Link to={`signin`} className="nav-link">Sign In</Link>
                        </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;