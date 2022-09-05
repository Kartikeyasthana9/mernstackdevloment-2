import { Formik } from 'formik';
import React from 'react'
import './login.css'

const Login = () => {

  // 1. submit fuction
  const loginSubmit = (formdata) => {
    console.log(formdata);
  }

  // 2. locate/create the form tag
  // 3. use Formik on form tag
  return (
    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <Formik initialValues={{ email: '', password: '' }} onSubmit={loginSubmit}>
                      {
                        ({ values, handleSubmit, handleChange }) => (

                          <form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                              <i
                                className="fas fa-cubes fa-2x me-3"
                                style={{ color: "#ff6219" }}
                              />
                              <span className="h1 fw-bold mb-0">Logo</span>
                            </div>
                            <h5
                              className="fw-normal mb-3 pb-3"
                              style={{ letterSpacing: 1 }}
                            >
                              Sign into your account
                            </h5>
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="email"
                                value={values.email}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="form3Example3cg">
                                Email Address 
                              </label>
                            </div>
                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="form2Example17">
                                Password
                              </label>
                            </div>
                            <div className="pt-1 mb-4">
                              <button
                                className="btn btn-dark btn-lg btn-block"
                                type="submit"
                              >
                                Login
                              </button>
                            </div>
                            <a className="small text-muted" href="#!">
                              Forgot password?
                            </a>
                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                              Don't have an account?{" "}
                              <a href="#!" style={{ color: "#393f81" }}>
                                Register here
                              </a>
                            </p>
                            <a href="#!" className="small text-muted">
                              Terms of use.
                            </a>
                            <a href="#!" className="small text-muted">
                              Privacy policy
                            </a>
                          </form>
                        )


                      }

                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Login