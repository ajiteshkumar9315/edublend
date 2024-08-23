import React from 'react'
// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
// import AppBar from './appbar'
// import '@/Login.css'

const Login = () => {
  return (
    <>
    {/* <AppBar/> */}
    // eslint-disable-next-line

      <div class="container con ">
      <h1 class="text-center fw-bold login-title my-5 mt--5 p-3">Login Form</h1>
      <form action="/login" class="form-signin" method="post">
      <div class="form-floating mb-3 email">
        <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" name="email"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating password">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password"/>
        <label for="floatingPassword">Password</label>
      </div>
      <div class="col-12 ">
        <div class="form-check agree">
          <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
          <label class="form-check-label text-dark fw-bolder" for="invalidCheck3">
          Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" class="invalid-feedback text-dark fw-bolder">
           You must agree before submitting.
          </div>
       </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary btn1 fw-bolder " type="submit">Sing in</button>
        <label  class="checkbox pull-left mt-3 fw-bolder">
        <input type="checkbox" value="remember-me"/>Remember me
        </label>
        <a href="/" class="pull-right text-dark fw-bolder need-help">Need Help?</a>
        <a href="/RegisterForm" class="text-center text-dark fw-bolder new-account">Create an account</a>
        </div>
        </form>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Login
