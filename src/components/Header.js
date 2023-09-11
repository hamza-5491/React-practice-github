import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg px-5">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Ameer Hamza</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link px-5" aria-current="page" to="/Hero">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-5" to="/Features">Recent Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-5" to="/Pricing">Pricing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-5" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-5" id="contact" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;