import React from "react";
import { Link, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import NewAccountForm from "./NewAccountForm";
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
            </nav>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={ <NewAccountForm />} />
            </Routes> */}
        </>
    )
}

export default NavBar;