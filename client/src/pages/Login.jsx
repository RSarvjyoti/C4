import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/login.css';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className='login-container container'>
      <Header />
      <div className='form-container'>
        <LoginForm />
      </div>
      <Footer />
    </div>
  )
}

export default Login
