"use client";

import React, { useState } from "react";
import "./style2.css";
import AppBar from "@/components/appbar";
// import "./style1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    // <AppBar/>

    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className={`form-container sign-up ${isActive ? "active" : ""}`}>
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>or use your email to register</span>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      <div className={`form-container sign-in ${!isActive ? "active" : ""}`}>
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#" className="icon"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>or use your email and password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${!isActive ? "active" : ""}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features.</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
          </div>

          <div className={`toggle-panel toggle-right ${isActive ? "active" : ""}`}>
            <h1>Hello, Subscriber!</h1>
            <p>Register with your personal details to use all of the site features.</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
