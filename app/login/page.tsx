import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';
// import AppBar from './appbar';
// import '@/Login.css';
import '@/app/login/Login.css';

const Login: React.FC = () => {
  return (
    <>
      {/* <AppBar /> */}
      {/* eslint-disable-next-line */}

      <div className="container con">
        <h1 className="text-center fw-bold login-title my-5 mt--5 p-3">Login Form</h1>
        <form action="/login" className="form-signin" method="post">
          <div className="form-floating mb-3 email">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating password">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="col-12">
            <div className="form-check agree">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label text-dark fw-bolder" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" className="invalid-feedback text-dark fw-bolder">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary btn1 fw-bolder" type="submit">
              Sign in
            </button>
            <label className="checkbox pull-left mt-3 fw-bolder">
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
            <a href="/" className="pull-right text-dark fw-bolder need-help">
              Need Help?
            </a>
            <a href="/RegisterForm" className="text-center text-dark fw-bolder new-account">
              Create an account
            </a>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
