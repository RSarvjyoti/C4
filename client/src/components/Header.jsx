import React from 'react';
import '../styles/header.css';
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <header className='header-container'>
        <img src={Logo} alt="logo" />
    </header>
  )
}

export default Header
