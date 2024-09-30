import React from "react";
import "../styles/form.css";
import Frame from '../assets/Frame.png';

const LoginForm = () => {
  return (
    <div className="from-container">
      <div>
        <div><h4>Create a new account</h4></div>
        <div> <img src={Frame} alt="google" /> <span>Sign Up with Google</span></div>
      </div>

      <button>Create an Account</button>
      <p>Already have an account?<a href="#"><span>Sign in</span></a></p>
    </div>
  );
};

export default LoginForm;
