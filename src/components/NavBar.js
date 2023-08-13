import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <div className="brand">
                    <Navbar.Brand href="#home" className="mb-0 fw-bold fs-3">Jewel Time</Navbar.Brand>
                    <img src="/NewLogo.png" width="100" height="100" alt=""></img>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Remove ms-auto class to not have the nav bar links aligned to the right */}
                    <Nav className="ms-auto">
                        <Link to={`Home`} className="nav-link px-4">Home</Link>
                        <Link to={`newproject`} className="nav-link px-4">Create a Project</Link>
                        <Link to={`userprojects`} className="nav-link px-4">My Projects</Link>
                        <Link to={`signup`} className="nav-link px-4">Sign Up</Link>
                        <Link to={`signin`} className="nav-link px-4">Sign In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;