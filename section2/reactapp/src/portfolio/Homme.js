import React from 'react'
import myim from './images/logo.webp';
import { NavLink } from 'react-router-dom'

const Homme = () => {
    return (
        <div>

            {/* // header */}
            <div
                className="p-5 text-center bg-image"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80")', height: 400 }}>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Hi, my name is Kartikey Asthana</h1>
                            <h4 className="mb-3">I build things for the web.</h4> <br />
                            <p>I'm a software engineeer in India. I mostly focus on the front-end of the web.<br /> This is my site <span style={{ backgroundColor: "#e97141" }}> XYZ CODERS </span>, where I blog and share whatever side's project I've working on.</p>

                            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                                DOwnload My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* // header */}



            {/* service */}
            <div className='container' style={{ justifyContent: "center", display: "flex", backgroundColor: "orange", width: "100%" }}>
                <h3>MY SERVICES</h3>
            </div>
            {/* service */}



            {/* services */}
            <div className="container py-5 ">
                <div className="row" >

                    <div className="col-md-6 col-xxl-3 mt-4">

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" className="card-img-top" alt="..." />
                            <div className="card-body">

                                <h5>Product Design</h5> <hr />
                                <p className="card-text"> I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3 mt-4">

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://t4.ftcdn.net/jpg/03/41/67/75/360_F_341677514_sWxbJzzse7IG1wqPvqni94A3Bk7MbQBJ.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>WEB DEVELOPMENT</h5> <hr />
                                <p className="card-text">I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xxl-3 mt-4">

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-vector-set-of-flat-digital-marketing-icons-icon-pack-includes-following-themes-pay-per-click_Bl64TdE9e_SB_PM.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">

                                <h5>DIGITAL MARKETING</h5> <hr />
                                <p className="card-text">I identify and evaluates new digital technologies and use web analytics tools to measure site traffic to better optimize marketing campaigns.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xxl-3 mt-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://cdn.shopify.com/app-store/listing_images/b864a2b8d18afd18743ff4d82cbca2fb/icon/COru8az0lu8CEAE=.png" className="card-img-top" alt="..." />
                            <div className="card-body">

                                <h5>APP DEVELOPMENT</h5> <hr />
                                <p className="card-text">
                                    I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.
                                </p>

                            </div>
                        </div> </div>



                </div>
            </div>
            {/* services */}






            {/* footer section */}
            <footer
                className="text-center text-white"
                style={{ backgroundColor: "#8f8f8f" }}
            >
                {/* Grid container */}
                <div className="container pt-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        {/* Twitter */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-linkedin" />
                        </a>
                        {/* Github */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center text-dark p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022 Copyright :
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        XYZCODERS.com
                    </a>
                </div>
                {/* Copyright */}
            </footer>
            {/* footer section */}







        </div>


    )
}

export default Homme