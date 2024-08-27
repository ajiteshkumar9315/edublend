"use client";
import React, { useEffect } from "react";
import styles from "@/app/login/login-signup.module.css"; // Ensure correct path
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'; // Import the Image component from Next.js
import Google from '@/public/images/google.svg'; // Adjust the import path as needed
import Microsoft from "@/public/images/microsoft.png"; // Adjust the import path as needed

const LoginSignup = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      if (container) {
        container.classList.add(styles.active); // Correct class reference
      }
    };

    const handleLoginClick = () => {
      if (container) {
        container.classList.remove(styles.active); // Correct class reference
      }
    };

    registerBtn?.addEventListener("click", handleRegisterClick);
    loginBtn?.addEventListener("click", handleLoginClick);

    // Cleanup event listeners on component unmount
    return () => {
      registerBtn?.removeEventListener("click", handleRegisterClick);
      loginBtn?.removeEventListener("click", handleLoginClick);
    };
  }, []);

  return (
    <div className="flex justify-center my-5">
      <div className={styles.container} id="container">
        <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
          <form action="#">
            <h1>Create Account</h1>
            <div className={styles["social-icons"]}>
              {/* Font Awesome icons */}
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>

            <span>or use your email for register</span>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
          <form action="#">
            <h1>Sign In</h1>
            <div className={styles["social-icons"]}>
              {/* Next.js Image component for imported images */}
              <a href="#" className={styles.icon}>
                <Image src={Google} alt="Google" width={24} height={24} />
              </a>
              <a href="#" className={styles.icon}>
                <Image src={Microsoft} alt="Microsoft" width={24} height={24} />
              </a>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password?</a>
            <button>Sign In</button>
          </form>
        </div>

        <div className={styles["toggle-container"]}>
          <div className={styles.toggle}>
            <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features.</p>
              <button className={styles.hidden} id="login">Sign In</button>
            </div>

            <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}>
              <h1>Hello, Subscriber!</h1>
              <p>Register with your personal details to use all of site features.</p>
              <button className={styles.hidden} id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
