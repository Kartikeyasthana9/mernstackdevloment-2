import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container">
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                        <img
                            src="https://mdbwebpcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows."
                            height={16}
                            alt="MDB Logo"
                            loading="lazy"
                            style={{ marginTop: "-1px" }}
                        />{/* Navbar brand */}
                    
                    </a>
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/homepage">
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink className="nav-link" to="/loginpage">
                                    Loginpage
                                </NavLink>

                            </li>
                            <li>
                                <NavLink className="nav-link" to="/event">
                                    Event Handling
                                </NavLink>

                            </li>
                            <li>
                                <NavLink className="nav-link" to="/usermanager">
                                    UserManager
                                </NavLink>

                            </li>
                            <li>
                                <NavLink className="nav-link" to="/newregister">
                                Register
                                </NavLink>

                            </li>
                        </ul>
                        {/* Left links */}
                        <div className="d-flex align-items-center">



                            {
                                !loggedIn ?

                                    <button type="button" className="btn btn-primary px-3 me-2" onClick={() => { setLoggedIn(true) }}>
                                        Login
                                    </button>
                                    :
                                    <button className='btn btn-danger' onClick={() => { setLoggedIn(false) }}>
                                        Log Out

                                    </button>
                            }
                            <button type="button" className="btn btn-primary me-3">
                                Sign up for free
                            </button>
                            <a
                                className="btn btn-dark px-3"
                                href="https://github.com/mdbootstrap/mdb-ui-kit"
                                role="button"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>

    )
}

export default Navbar