import { logDOM } from '@testing-library/react';
import React from 'react';
import myim from './images/logo.webp';
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <>

            {/* navigation */}
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "#d4f4d4" }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand me-2" to="#">
                        <img
                            src={myim}
                            height={40}
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />{/* Navbar brand */}

                    </ NavLink>
                    {/* <a className="navbar-brand" href="#">
                        Navbar
                    </a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >


                            <li><NavLink
                                className="nav-link" aria-current="page" to="/home" >
                                Home

                            </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-link" to="#">
                                    Services

                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-link" to="#">
                                    About

                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to="/con">
                                    Contact US
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navigation */}


        </>

    )
}

export default Nav