import React from 'react';
import '../styles/sidebar.css';
import Frame2 from '../assets/Frame2.png';
import home from '../assets/Home.png';
import Vector from '../assets/Vector.png';
import Vector1 from '../assets/Vector1.png';
import Vector2 from '../assets/Vector2.png';
import one from '../assets/1.png';
import two from '../assets/2.png';

const SideNav = () => {
  return (
    <div className='side-bar'>
      <div className='logo'><img src={Frame2} alt="logo" /></div>
      <div><img src={home} alt="" /></div>
      <div><img src={Vector} alt="" /></div>
      <div><img src={one} alt="" /></div>
      <div><img src={Vector1} alt="" /></div>
      <div><img src={two} alt="" /></div>
      <div><img src={Vector2} alt="" /></div>
    </div>
  )
}

export default SideNav
