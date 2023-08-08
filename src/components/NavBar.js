import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import './NavBar.css'

function NavBar() {
    return (
        <>
            <Navbar className="navbar-light">
                <Container>
                    <div>
                        <Navbar.Brand href="#home" className="mb-0 h1">Jeweltime 💎</Navbar.Brand>
                        {/* <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img> */}
                    </div>
                        <div className="home">
                            <Link to={`Home`}>Home</Link>
                        </div>
                        <div className="newproject">
                            <Link to={`newproject`}>Create a Project</Link>
                        </div>
                        <div className="userProjects">
                            <Link to={`userprojects`}>My Projects</Link>
                        </div>
                        <div className="signup">
                            <Link to={`signup`}>Sign Up</Link>
                        </div>
                        <div className="signIn">
                            <Link to={`signin`}>Sign In</Link>
                        </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;